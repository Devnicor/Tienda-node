const router = require('./productosRouter');

router.get('/:catId/productos/:prodId', (req, res) => {
  const { catId, prodId } = req.params;
  res.json({
    catId,
    prodId,
  });
});

module.exports = router;