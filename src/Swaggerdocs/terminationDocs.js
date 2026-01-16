/**
 * @swagger
 * /portal/termination/resignEmp:
 *   post:
 *     summary: Resign an Employee
 *     description: API to process an employee's resignation by providing their registration ID, termination date, reason, and creator's ID.
 *     tags:
 *       - Termination
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
 *                 example: 174
 *                 description: The registration ID of the employee.
 *               terminationdt:
 *                 type: string
 *                 format: date
 *                 example: "2024-04-04"
 *                 description: The termination date.
 *               reason:
 *                 type: string
 *                 example: "190"
 *                 description: The reason code for the resignation.
 *               createdby:
 *                 type: integer
 *                 example: 7
 *                 description: The ID of the user who initiated the resignation.
 *     responses:
 *       200:
 *         description: Employee resigned successfully
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
 * /portal/termination/rejoinEmp:
 *   post:
 *     summary: Rejoin an Employee
 *     description: API to reinstate an employee by providing their registration ID.
 *     tags:
 *       - Termination
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
 *                 example: 3758
 *                 description: The registration ID of the employee to rejoin.
 *     responses:
 *       200:
 *         description: Employee rejoined successfully
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
 * /portal/termination/getTerminatedlist:
 *   get:
 *     summary: Get Terminated Employees List
 *     description: API to fetch a list of terminated employees based on the provided superid.
 *     tags:
 *       - Termination
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: superid
 *         required: true
 *         schema:
 *           type: integer
 *           example: 10000
 *         description: The unique superid to filter terminated employees.
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of terminated employees
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
