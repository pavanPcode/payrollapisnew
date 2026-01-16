/**
 * @swagger
 * /portal/branch/getbranch:
 *   get:
 *     summary: Get Branch Details
 *     description: Retrieves branch details based on the provided superid.
 *     tags:
 *       - branch
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: superid
 *         required: true
 *         schema:
 *           type: string
 *         example: "10000"
 *         description: Unique Super ID for fetching branch details
 *     responses:
 *       200:
 *         description: Branch details retrieved successfully
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
 * /portal/branch/createbranch:
 *   post:
 *     summary: Create a new branch
 *     description: API to create a new branch with the given details.
 *     tags:
 *       - branch
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               superid:
 *                 type: integer
 *                 example: 31113
 *               name:
 *                 type: string
 *                 example: TEST
 *               code:
 *                 type: string
 *                 example: ADLF
 *               createdby:
 *                 type: integer
 *                 example: 20
 *     responses:
 *       200:
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
 * /portal/branch/updatebranch:
 *   post:
 *     summary: Update an existing branch
 *     description: API to update an existing branch with the given details.
 *     tags:
 *       - branch
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               superid:
 *                 type: integer
 *                 example: 10000
 *               name:
 *                 type: string
 *                 example: TEST
 *               code:
 *                 type: string
 *                 example: TEST
 *               createdby:
 *                 type: integer
 *                 example: 20
 *               branchid:
 *                 type: integer
 *                 example: 70
 *     responses:
 *       200:
 *         description: Branch updated successfully
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
 * /portal/branch/deletebranch:
 *   post:
 *     summary: Delete a branch
 *     description: API to delete an existing branch by branch ID.
 *     tags:
 *       - branch
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               branchid:
 *                 type: integer
 *                 example: 70
 *     responses:
 *       200:
 *         description: Branch deleted successfully
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

