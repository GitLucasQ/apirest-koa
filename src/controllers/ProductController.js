import { ProductService } from "../services/ProductService";
import logger from "../shared/logger";
import {
    RESPONSE_ERROR as ERROR,
    RESPONSE_OK as OK
} from '../shared/Variables';

const productService = new ProductService();

export const getAllProducts = async (ctx) => {
    const products = await productService.getAllProducts();

    ctx.body = {
        status: OK.message,
        message: products
    }

    logger.info(`${ctx.request.method} ${ctx.request.url} - ${new Date().toLocaleString()}`);
};


export const getProductById = async (ctx) => {
    const { id } = ctx.params;
    const foundedProduct = await productService.getProductById(id);

    if (foundedProduct) {
        ctx.body = {
            status: OK.message,
            message: foundedProduct
        }
    }
    else {
        ctx.response.status = ERROR.code
        ctx.body = {
            status: ERROR.message,
            message: 'Product not found'
        }
    }

    logger.info(`${ctx.request.method} ${ctx.request.url} - ${new Date().toLocaleString()}`);
};


export const createNewProduct = async (ctx) => {
    const { name, price, photo } = ctx.request.body;
    const createdProduct = await productService.createNewProduct({ name, price, photo });

    if (createdProduct) {
        ctx.body = {
            status: OK.message,
            message: createdProduct
        }
    }
    else {
        ctx.response.status = ERROR.code
        ctx.body = {
            status: ERROR.message,
            message: 'Product not created'
        }
    }

    logger.info(`${ctx.request.method} ${ctx.request.url} - ${new Date().toLocaleString()}`);
};


export const updateProduct = async (ctx) => {
    const { id } = ctx.params;
    const { name, price, photo } = ctx.request.body;
    const updatedProduct = await productService.updateProduct(id, { name, price, photo });

    if (updatedProduct) {
        ctx.body = {
            status: OK.message,
            message: updatedProduct
        }
    }
    else {
        ctx.response.status = ERROR.code
        ctx.body = {
            status: ERROR.message,
            message: 'Product not updated'
        }
    }

    logger.info(`${ctx.request.method} ${ctx.request.url} - ${new Date().toLocaleString()}`);
};


export const deleteProduct = async (ctx) => {
    const { id } = ctx.params;
    await productService.delete(id);

    ctx.body = {
        status: OK.message,
        message: 'Product deleted'
    }

    logger.info(`${ctx.request.method} ${ctx.request.url} - ${new Date().toLocaleString()}`);
};