/**
 * @swagger
 * /portal/shifts/getShiftsTypes:
 *   get:
 *     summary: Get Shift Types
 *     description: API to retrieve all shift types based on the provided super ID.
 *     tags:
 *       - shifts
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: superid
 *         required: true
 *         schema:
 *           type: integer
 *         description: The Super ID to fetch shift types for.
 *     responses:
 *       200:
 *         description: Successfully retrieved shift types.
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
 * /portal/shifts/getAssignshiftByEmp:
 *   get:
 *     summary: Get Assigned Shifts by Employee
 *     description: API to retrieve assigned shifts for a specific employee based on their registration ID.
 *     tags:
 *       - shifts
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: regid
 *         required: true
 *         schema:
 *           type: integer
 *         description: The registration ID of the employee.
 *     responses:
 *       200:
 *         description: Successfully retrieved assigned shifts.
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
 * /portal/shifts/getEmpByShift:
 *   get:
 *     summary: Get Employees by Shift
 *     description: API to retrieve employees assigned to a specific shift based on shift ID and super ID.
 *     tags:
 *       - shifts
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: shiftid
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the shift.
 *       - in: query
 *         name: superid
 *         required: true
 *         schema:
 *           type: integer
 *         description: The super ID for filtering employees.
 *     responses:
 *       200:
 *         description: Successfully retrieved employees assigned to the shift.
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
 * /portal/shifts/assignShifts:
 *   post:
 *     summary: Assign Shifts to Employees
 *     description: API to assign a shift to multiple employees for a given date range.
 *     tags:
 *       - shifts
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
 *                 type: array
 *                 items:
 *                   type: integer
 *                 example: [78, 3335, 3693]
 *                 description: List of employee registration IDs.
 *               shiftid:
 *                 type: integer
 *                 example: 58
 *                 description: The shift ID to assign.
 *               startdate:
 *                 type: string
 *                 format: date
 *                 example: "2024-04-01"
 *                 description: Start date of the shift assignment.
 *               enddate:
 *                 type: string
 *                 format: date
 *                 example: "2024-04-20"
 *                 description: End date of the shift assignment.
 *     responses:
 *       200:
 *         description: Shift assigned successfully
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
 * /portal/shifts/getShiftCountByDate:
 *   get:
 *     summary: Get shift count by date
 *     description: Retrieve the number of employees grouped by shift for a specific date and super ID.
 *     tags:
 *       - shifts
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: DateOfTransaction
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         example: 2024-04-01
 *       - in: query
 *         name: SuperId
 *         schema:
 *           type: integer
 *         required: true
 *         example: 10000
 *     responses:
 *       200:
 *         description: Shift-wise employee count retrieved successfully
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
