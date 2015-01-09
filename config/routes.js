/** * Route Mappings * (sails.config.routes) * * Your routes map URLs to views and controllers. * * If Sails receives a URL that doesn't match any of the routes below, * it will check for matching files (images, scripts, stylesheets, etc.) * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg` * might match an image file: `/assets/images/foo.jpg` * * Finally, if those don't match either, the default 404 handler is triggered. * See `api/responses/notFound.js` to adjust your app's 404 logic. * * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or * CoffeeScript for the front-end. * * For more information on configuring custom routes, check out: * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html */  module.exports.routes = {    //user     'POST /signup': 'UserController.signup',     'POST /login': 'UserController.login',     'GET /user/isLogedin': 'UserController.isLogedin',          //category     'POST /tips/category': 'TipsController.category_add',     'PUT /tips/category/:id': 'TipsController.category_edit',     'DELETE /tips/category/:id': 'TipsController.category_delete',     'GET /tips/categories/:id': 'TipsController.categories',     //tip     'POST /tips': 'TipsController.add',     'PUT /tips/:id': 'TipsController.edit',     'DELETE /tips/:id': 'TipsController.delete',     //find tip     'GET /tips-by-category/:categoryId': 'TipsController.index',     'GET /tips-by-user/:userId': 'TipsController.index',     'GET /tips/:categoryId/:userId': 'TipsController.index',          //tip features     'POST /user/subscribe/:categoryId/:createdBy': 'UserController.subscribe',     'DELETE /user/subscribe/:categoryId/:createdBy': 'UserController.unsubscribe',     'POST /tips/:tipId/vote-up': 'TipsController.thumbsUp',     'POST /tips/:tipId/vote-down': 'TipsController.thumbsDown',  /***************************************************************************  *                                                                          *  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *  * etc. depending on your default view engine) your home page.              *  *                                                                          *  * (Alternatively, remove this and add an `index.html` file in your         *  * `assets` directory)                                                      *  *                                                                          *  ***************************************************************************/  '/': {    view: 'homepage'  }  /***************************************************************************  *                                                                          *  * Custom routes here...                                                    *  *                                                                          *  *  If a request to a URL doesn't match any of the custom routes above, it  *  * is matched against Sails route blueprints. See `config/blueprints.js`    *  * for configuration options and examples.                                  *  *                                                                          *  ***************************************************************************/};