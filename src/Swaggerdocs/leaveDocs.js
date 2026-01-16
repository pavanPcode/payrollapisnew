/**
 * @swagger
 * /portal/leave/getleavetype:
 *   get:
 *     summary: Get Leave Types
 *     description: Fetches the list of available leave types.
 *     tags:
 *       - LeaveTypes
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Leave types retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ArraySuccessResponse'
 *       401:
 *         description: Unauthorized (Missing or invalid token).
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /portal/leave/getempleaves:
 *   get:
 *     summary: Get Employee Leave Details
 *     description: Fetches leave details of an employee for a given year.
 *     tags:
 *       - Leave
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: superid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 31465
 *         description: superid.
 *       - in: query
 *         name: regid
 *         required: false
 *         schema:
 *           type: integer
 *         example: 31465
 *         description: Employee Registration ID.
 *       - in: query
 *         name: year
 *         required: true
 *         schema:
 *           type: integer
 *         example: 2026
 *         description: Year for which leave details are needed.
 *     responses:
 *       200:
 *         description: Employee leave details retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ArraySuccessResponse'
 *       400:
 *         description: Missing or invalid parameters.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized (Missing or invalid token).
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /portal/leave/getleaveaccruals:
 *   get:
 *     summary: Get Employee Leave Accruals
 *     description: Fetches leave accrual details of an employee for a given year.
 *     tags:
 *       - Leave
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: regid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 27
 *         description: Employee Registration ID.
 *       - in: query
 *         name: year
 *         required: true
 *         schema:
 *           type: integer
 *         example: 2024
 *         description: Year for which leave accrual details are needed.
 *     responses:
 *       200:
 *         description: Employee leave accrual details retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ArraySuccessResponse'
 *       400:
 *         description: Missing or invalid parameters.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized (Missing or invalid token).
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
/**
 * @swagger
 * /portal/leave/getLeaveAccrualsForAdmin:
 *   get:
 *     summary: Get Leave Accruals for Admin
 *     description: Fetches leave accrual details for all employees under the given Super ID for the specified year.
 *     tags:
 *       - Leave
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: SuperId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 10136
 *         description: Super ID of the organization or admin user.
 *       - in: query
 *         name: Year
 *         required: true
 *         schema:
 *           type: integer
 *         example: 2020
 *         description: Year for which leave accrual details are needed.
 *     responses:
 *       200:
 *         description: Leave accrual details retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ArraySuccessResponse'
 *       400:
 *         description: Missing or invalid parameters.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized (Missing or invalid token).
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /portal/leave/getleavesummary:
 *   get:
 *     summary: Get Employee Leave Summary
 *     description: Fetches leave summary details of an employee for a given year.
 *     tags:
 *       - Leave
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: regid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 27
 *         description: Employee Registration ID.
 *       - in: query
 *         name: year
 *         required: true
 *         schema:
 *           type: integer
 *         example: 2024
 *         description: Year for which leave summary is needed.
 *     responses:
 *       200:
 *         description: Employee leave summary retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ArraySuccessResponse'
 *       400:
 *         description: Missing or invalid parameters.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized (Missing or invalid token).
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /portal/leave/saveleave:
 *   post:
 *     summary: Save Employee Leave Request
 *     description: Submits a leave request for an employee.
 *     tags:
 *       - Leave
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               inputdata:
 *                 type: object
 *                 properties:
 *                   superid:
 *                     type: integer
 *                     example: 10260
 *                     description: Supervisor ID.
 *                   regid:
 *                     type: integer
 *                     example: 31465
 *                     description: Employee Registration ID.
 *                   lvtypeid:
 *                     type: integer
 *                     example: 1
 *                     description: Leave type ID.
 *                   startdate:
 *                     type: string
 *                     format: date
 *                     example: "2026-03-08"
 *                     description: Start date of leave.
 *                   enddate:
 *                     type: string
 *                     format: date
 *                     example: "2026-03-08"
 *                     description: End date of leave.
 *                   leavecount:
 *                     type: integer
 *                     example: 1
 *                     description: Total leave days.
 *                   comments:
 *                     type: string
 *                     example: "Sir, I wanted to request leave for Thursday, 3rd October, due to a family function."
 *                     description: Reason for leave.
 *                   halfday:
 *                     type: integer
 *                     example: 0
 *                     description: Indicates if it is a half-day leave (1 = Yes, 0 = No).
 *     responses:
 *       200:
 *         description: Leave request submitted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SingleRecordSuccessResponse'
 *       400:
 *         description: Missing or invalid parameters.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized (Missing or invalid token).
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /portal/leave/updateleave:
 *   post:
 *     summary: Update Employee Leave Status
 *     description: Updates the leave request status (Approve/Reject).
 *     tags:
 *       - Leave
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: integer
 *                 enum: [1, 2, 3]
 *                 example: 2
 *                 description: |
 *                   Leave status:  
 *                   - `1` = Pending  
 *                   - `2` = Approved  
 *                   - `3` = Rejected  
 *               leaveid:
 *                 type: integer
 *                 example: 7485
 *                 description: Leave request ID.
 *               regid:
 *                 type: integer
 *                 example: 3209
 *                 description: Employee Registration ID.
 *               comments:
 *                 type: string
 *                 example: "ok"
 *                 description: Approval or rejection comments.
 *     responses:
 *       200:
 *         description: Leave status updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SingleRecordSuccessResponse'
 *       400:
 *         description: Missing or invalid parameters.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized (Missing or invalid token).
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
/**
 * @swagger
 * /portal/leave/createLeaveTypes:
 *   post:
 *     summary: Create a New Leave Type
 *     description: Adds a new leave type with a code and name.
 *     tags:
 *       - LeaveTypes
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lvtype:
 *                 type: string
 *                 example: "test"
 *                 description: Name of the leave type (e.g., Sick Leave, Casual Leave).
 *               lvcode:
 *                 type: string
 *                 example: "test"
 *                 description: Code for the leave type (e.g., SL, CL).
 *     responses:
 *       200:
 *         description: Leave type created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SingleRecordSuccessResponse'
 *       400:
 *         description: Missing or invalid input parameters.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized access.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
/**
 * @swagger
 * /portal/leave/updateLeaveTypes:
 *   post:
 *     summary: Update an Existing Leave Type
 *     description: Updates the leave type name and code based on the provided ID.
 *     tags:
 *       - LeaveTypes
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 12
 *                 description: ID of the leave type to be updated.
 *               lvtype:
 *                 type: string
 *                 example: "test1"
 *                 description: Updated name of the leave type.
 *               lvcode:
 *                 type: string
 *                 example: "test1"
 *                 description: Updated code for the leave type.
 *     responses:
 *       200:
 *         description: Leave type updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SingleRecordSuccessResponse'
 *       400:
 *         description: Invalid request body or missing fields.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized access.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
/**
 * @swagger
 * /portal/leave/deleteLeaveTypes:
 *   post:
 *     summary: Delete a Leave Type
 *     description: Deletes a leave type based on the provided ID.
 *     tags:
 *       - LeaveTypes
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 12
 *                 description: ID of the leave type to be deleted.
 *     responses:
 *       200:
 *         description: Leave type deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SingleRecordSuccessResponse'
 *       400:
 *         description: Invalid ID or missing field.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized access.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
