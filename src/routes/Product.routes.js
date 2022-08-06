const Router = require('koa-router');
import * as ProductController from '../controllers/ProductController';


const router = new Router({
    prefix: '/products',
});

router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductById);
router.post('/create', ProductController.createNewProduct);
router.put('/update/:id', ProductController.updateProduct);
router.delete('/delete/:id', ProductController.deleteProduct);

export default router;