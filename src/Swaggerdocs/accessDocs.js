/**
 * @swagger
 * /portal/access/addmobileaccess:
 *   post:
 *     summary: Grant Mobile Access to Employee
 *     description: API to provide mobile access to an employee based on their regid.
 *     tags:
 *       - Access Management
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               regid:
 *                 type: integer
 *                 example: 78
 *                 description: The unique ID of the employee.
 *     responses:
 *       200:
 *         description: Mobile access granted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SingleRecordSuccessResponse'
 *       400:
 *         description: Missing or invalid parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized (Missing or invalid token)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /portal/access/addempportalaccess:
 *   post:
 *     summary: Grant Portal Access to Employee
 *     description: API to provide portal access to an employee based on their regid.
 *     tags:
 *       - Access Management
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               regid:
 *                 type: integer
 *                 example: 78
 *                 description: The unique ID of the employee.
 *     responses:
 *       200:
 *         description: Portal access granted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SingleRecordSuccessResponse'
 *       400:
 *         description: Missing or invalid parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized (Missing or invalid token)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
/**
 * @swagger
 * /portal/access/removeempportalaccess:
 *   post:
 *     summary: Remove Portal Access from Employee
 *     description: API to revoke portal access for an employee based on their regid.
 *     tags:
 *       - Access Management
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               regid:
 *                 type: integer
 *                 example: 78
 *                 description: The unique ID of the employee.
 *     responses:
 *       200:
 *         description: Portal access removed successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SingleRecordSuccessResponse'
 *       400:
 *         description: Missing or invalid parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized (Missing or invalid token)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
/**
 * @swagger
 * /portal/access/removemobileaccess:
 *   post:
 *     summary: Remove Mobile Access for an Employee
 *     description: API to revoke mobile access for an employee based on their regid.
 *     tags:
 *       - Access Management
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               regid:
 *                 type: integer
 *                 example: 78
 *                 description: The unique ID of the employee whose mobile access will be revoked.
 *     responses:
 *       200:
 *         description: Mobile access removed successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SingleRecordSuccessResponse'
 *       400:
 *         description: Missing or invalid parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized (Missing or invalid token)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */




