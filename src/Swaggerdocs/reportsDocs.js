/**
 * @swagger
 * /portal/reports/getReports:
 *   get:
 *     summary: Get Employee Reports
 *     description: Retrieves reports based on filters like date, department, shift, etc.
 *     tags:
 *       - Reports
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: superid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 10000
 *         description: Supervisor ID.
 *       - in: query
 *         name: reportiid
 *         required: true
 *         schema:
 *           type: integer
 *         description: Report ID.
 *       - in: query
 *         name: StartDate
 *         required: false
 *         schema:
 *           type: string
 *           format: date
 *         description: Start date for the report range.
 *       - in: query
 *         name: EndDate
 *         required: false
 *         schema:
 *           type: string
 *           format: date
 *         description: End date for the report range.
 *       - in: query
 *         name: RegId
 *         required: false
 *         schema:
 *           type: integer
 *         description: Employee Registration ID.
 *       - in: query
 *         name: DeptId
 *         required: false
 *         schema:
 *           type: integer
 *         description: Department ID.
 *       - in: query
 *         name: AttendanceStatus
 *         required: false
 *         schema:
 *           type: string
 *         description: Attendance status filter.
 *       - in: query
 *         name: ShiftId
 *         required: false
 *         schema:
 *           type: integer
 *         description: Shift ID.
 *       - in: query
 *         name: BranchId
 *         required: false
 *         schema:
 *           type: integer
 *         description: Branch ID.
 *     responses:
 *       200:
 *         description: Report data retrieved successfully.
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
 * /portal/reports/getreporthead:
 *   get:
 *     summary: Get Report Header
 *     description: Retrieves the header information of a specific report by report ID.
 *     tags:
 *       - Reports
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: reportiid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 2
 *         description: ID of the report to fetch header details for.
 *     responses:
 *       200:
 *         description: Report header retrieved successfully.
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