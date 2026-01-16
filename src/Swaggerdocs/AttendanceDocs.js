/**
 * @swagger
 * /portal/Attendance/getPunchType:
 *   get:
 *     summary: Get Punch Type
 *     description: Fetches the punch type (In/Out) for the given registration ID.
 *     tags:
 *       - Attendance
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: regid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 32540
 *         description: Registration ID of the employee
 *     responses:
 *       200:
 *         description: Punch type retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PunchTypeSuccessResponse'
 *       400:
 *         description: Missing or invalid parameter
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
 * /portal/Attendance/getAttendancebystatus:
 *   get:
 *     summary: Get Attendance by Status
 *     description: Fetches attendance records for a specific supervisor ID, status, and date range.
 *     tags:
 *       - Attendance
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: SuperId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 10000
 *         description: Supervisor ID
 *       - in: query
 *         name: InStatus
 *         required: true
 *         schema:
 *           type: string
 *           enum: [P, L, A, LV, D ,WO,H]
 *         example: A
 *         description: |
 *           Attendance status to filter:
 *             - P: Present
 *             - L: Late
 *             - A: Absent
 *             - LV: Leave
 *             - D: On Duty
 *             - WO: Week Off
 *             - H: Holiday
 *       - in: query
 *         name: selectedDate
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         example: "2025-04-25"
 *         description: Date for filtering dashboard data
 *     responses:
 *       200:
 *         description: Attendance records retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ArraySuccessResponse'
 *       400:
 *         description: Missing or invalid parameter
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
 * /portal/Attendance/getattendanceForAdmin:
 *   get:
 *     summary: Get Attendance for Admin
 *     description: Retrieves attendance records for a given Supervisor ID within a date range .reg ID (optional)..
 *     tags:
 *       - Attendance
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: Superid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 10000
 *         description: Supervisor ID
 *       - in: query
 *         name: startdate
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         example: 2019-12-31
 *         description: Start date (YYYY-MM-DD)
 *       - in: query
 *         name: enddate
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         example: 2019-12-31
 *         description: End date (YYYY-MM-DD)
 *       - in: query
 *         name: regid
 *         required: false
 *         schema:
 *           type: string
 *           default: regid
 *         example: ""
 *         description: Registration ID (optional).
 *     responses:
 *       200:
 *         description: Attendance records retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ArraySuccessResponse'
 *       400:
 *         description: Missing or invalid parameter
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
 * /portal/Attendance/getempattendance:
 *   get:
 *     summary: Get Employee Attendance
 *     description: Fetches attendance records for a specific employee within a given date range.
 *     tags:
 *       - Attendance
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: regid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 32031
 *         description: Registration ID of the employee
 *       - in: query
 *         name: superid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 10200
 *         description: Supervisor ID for the employee
 *       - in: query
 *         name: fromdate
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         example: "2026-03-03"
 *         description: Start date for attendance records (YYYY-MM-DD)
 *       - in: query
 *         name: todate
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         example: "2026-03-04"
 *         description: End date for attendance records (YYYY-MM-DD)
 *     responses:
 *       200:
 *         description: Employee attendance retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ArraySuccessResponse'
 *       400:
 *         description: Missing or invalid parameter
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
 * /portal/Attendance/writeswipe:
 *   post:
 *     summary: Record an Attendance Swipe
 *     description: Records an employee swipe-in/swipe-out along with location details.
 *     tags:
 *       - Attendance
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WriteSwipeRequest'
 *     responses:
 *       200:
 *         description: Swipe recorded successfully
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
 * /portal/Attendance/updateManualAttendance:
 *   post:
 *     summary: Update Manual Attendance
 *     description: Updates manual attendance records, including swipes and attendance status.
 *     tags:
 *       - Attendance
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
 *                   SuperId:
 *                     type: string
 *                     example: "10000"
 *                   RegId:
 *                     type: string
 *                     example: "78"
 *                   Reason:
 *                     type: string
 *                     example: "test"
 *                   InStatus:
 *                     type: string
 *                     example: "A"
 *                   OutStatus:
 *                     type: string
 *                     example: "A"
 *                   DayInOutId:
 *                     type: string
 *                     example: "1162310"
 *                   DateOfTransaction:
 *                     type: string
 *                     format: date
 *                     example: "2031-03-12"
 *                   ActualShiftId:
 *                     type: string
 *                     example: ""
 *               DaySwipes:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     DaySwipesId:
 *                       type: string
 *                       example: "0"  # 0 for new record, ID for update
 *                     InTime:
 *                       type: string
 *                       example: "11:06:47"
 *                     OutTime:
 *                       type: string
 *                       example: "11:32:54"
 *     responses:
 *       200:
 *         description: Attendance updated successfully
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
 * /portal/Attendance/getSwipes:
 *   get:
 *     summary: Get Attendance Swipes
 *     description: Retrieves attendance swipe records based on registration ID, supervisor ID, and date.
 *     tags:
 *       - Attendance
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: regid
 *         required: true
 *         schema:
 *           type: string
 *         description: Registration ID of the employee
 *         example: "78"
 *       - in: query
 *         name: superid
 *         required: true
 *         schema:
 *           type: string
 *         description: Supervisor ID
 *         example: "10000"
 *       - in: query
 *         name: date
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         description: Date of attendance swipe records
 *         example: "2030-03-12"
 *     responses:
 *       200:
 *         description: Successfully retrieved swipe records
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
 * /portal/Attendance/getAttendancebystatusoflast7days:
 *   get:
 *     summary: Get Attendance by Status
 *     description: Fetches attendance records for a specific supervisor ID, status, and date range.
 *     tags:
 *       - Attendance
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: SuperId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 10000
 *         description: Supervisor ID
 *       - in: query
 *         name: currentdates
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         example: "2025-04-25"
 *         description: Date for filtering dashboard data
 *     responses:
 *       200:
 *         description: Attendance records retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ArraySuccessResponse'
 *       400:
 *         description: Missing or invalid parameter
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
 * /portal/Attendance/BulkManualAttendance:
 *   post:
 *     summary: Bulk Manual Attendance
 *     description: Inserts manual attendance entries in bulk for given RegIds with start and end times.
 *     tags:
 *       - Attendance
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
 *                 type: string
 *                 example: "10000"
 *               MachineId:
 *                 type: string
 *                 example: "99"
 *               startdatetime:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-05-06 10:00:00"
 *               enddatetime:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-05-06 18:00:00"
 *               regids:
 *                 type: string
 *                 example: "[{ 'CardId': '4208', 'RegId': '4208' },{ 'CardId': '4218', 'RegId': '4218' }]"
 *                 description: JSON string of array containing CardId and RegId pairs
 *     responses:
 *       200:
 *         description: Attendance records inserted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessResponse'
 *       400:
 *         description: Invalid request format or missing parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized (invalid or missing token)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
