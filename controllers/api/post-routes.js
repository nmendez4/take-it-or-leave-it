const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, Like, Category } = require('../../models');

router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({      
      attributes: 
      [
      'id', 
      'product_name', 
      'description', 
      'created_at',
      'img_file',
      [sequelize.literal('(SELECT COUNT(*) FROM likes WHERE post_id = post.id)'), 'like_count']
    ],
      order: [['created_at', 'DESC']], 
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Category,
          attributes: ['category_name']
        }

      ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'product_name',
      'description',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM likes WHERE post_id = post.id)'), 'like_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      },
      {
        model: Category,
        attributes: ['category_name']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Post.create({
      product_name: req.body.product_name,
      description: req.body.description,
      img_file: req.body.img_file,
      user_id: req.session.user_id
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// PUT /api/posts/like
router.put('/like', (req, res) => {
  Like.create({
    user_id: req.body.user_id,
    post_id: req.body.post_id
  }).then(() => {
    // then find the post we just voted on
    return Post.findOne({
      where: {
        id: req.body.post_id
      },
      attributes: [
        'id',
        'product_name',
        'description',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM likes WHERE post_id = post.id)'), 'like_count']
      ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => res.json(err));
  });
});


router.put('/:id', (req, res) => {
    Post.update(
      {
        product_name: req.body.product_name
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.delete('/:id', (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;