/**
 * @swagger
 * /portal/team/addteammember:
 *   post:
 *     summary: Add a Team Member
 *     description: Assigns an employee to a manager within a specific supervisor's team.
 *     tags:
 *       - Team
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
 *                 example: 10260
 *                 description: Supervisor ID.
 *               regid:
 *                 type: integer
 *                 example: 30145
 *                 description: Employee Registration ID.
 *               managerid:
 *                 type: integer
 *                 example: 31465
 *                 description: Manager ID to whom the employee will be assigned.
 *     responses:
 *       200:
 *         description: Team member added successfully.
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
 * /portal/team/deleteteammember:
 *   post:
 *     summary: Delete a Team Member
 *     description: Removes an employee from a team.
 *     tags:
 *       - Team
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
 *                 example: 3209
 *                 description: Employee Registration ID to be removed from the team.
 *     responses:
 *       200:
 *         description: Team member deleted successfully.
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
 * /portal/team/getmyteam:
 *   get:
 *     summary: Get Team Members
 *     description: Fetches the list of employees under a specific manager.
 *     tags:
 *       - Team
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: managerid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 31465
 *         description: Manager's registration ID.
 *     responses:
 *       200:
 *         description: Team members retrieved successfully.
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
 * /portal/team/getmyteamattendance:
 *   get:
 *     summary: Get Team Attendance
 *     description: Fetches the attendance records of employees under a specific manager for a given date range.
 *     tags:
 *       - Team
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: managerid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 114
 *         description: Manager's registration ID.
 *       - in: query
 *         name: startdate
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         example: "2022-12-01"
 *         description: Start date for the attendance records (YYYY-MM-DD).
 *       - in: query
 *         name: enddate
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         example: "2022-12-10"
 *         description: End date for the attendance records (YYYY-MM-DD).
 *     responses:
 *       200:
 *         description: Attendance records retrieved successfully.
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
 * /portal/team/getmyteamattendance:
 *   get:
 *     summary: Get Team Attendance
 *     description: Fetches the attendance records of employees under a specific manager for a given date range.
 *     tags:
 *       - Team
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: managerid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 114
 *         description: Manager's registration ID.
 *       - in: query
 *         name: startdate
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         example: "2022-12-01"
 *         description: Start date for the attendance records (YYYY-MM-DD).
 *       - in: query
 *         name: enddate
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         example: "2022-12-10"
 *         description: End date for the attendance records (YYYY-MM-DD).
 *       - in: query
 *         name: regid
 *         required: false
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Attendance records retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Attendance records retrieved successfully."
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       regid:
 *                         type: integer
 *                         example: 32031
 *                       name:
 *                         type: string
 *                         example: "John Doe"
 *                       date:
 *                         type: string
 *                         format: date
 *                         example: "2022-12-05"
 *                       status:
 *                         type: string
 *                         example: "Present"
 *       400:
 *         description: Missing or invalid parameters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Invalid parameters. Please check the inputs."
 *       401:
 *         description: Unauthorized (Missing or invalid token).
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Unauthorized request. Please provide a valid token."
 */


/**
 * @swagger
 * /portal/team/getmyteamleaves:
 *   get:
 *     summary: Get Team Leave Records
 *     description: Fetches leave records of employees under a specific manager for a given year and status.
 *     tags:
 *       - Team
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: managerid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 114
 *         description: Manager's registration ID.
 *       - in: query
 *         name: year
 *         required: true
 *         schema:
 *           type: integer
 *         example: 2023
 *         description: Year for fetching leave records.
 *       - in: query
 *         name: status
 *         required: false
 *         schema:
 *           type: integer
 *         example: 2
 *         description: Leave status filter (1 = Pending, 2 = Approved, 3 = Rejected).
 *       - in: query
 *         name: regid
 *         required: false
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Leave records retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Leave records retrieved successfully."
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       regid:
 *                         type: integer
 *                         example: 32031
 *                       name:
 *                         type: string
 *                         example: "John Doe"
 *                       startdate:
 *                         type: string
 *                         format: date
 *                         example: "2023-06-15"
 *                       enddate:
 *                         type: string
 *                         format: date
 *                         example: "2023-06-16"
 *                       leavecount:
 *                         type: integer
 *                         example: 2
 *                       status:
 *                         type: integer
 *                         example: 2
 *                         description: "1 = Pending, 2 = Approved, 3 = Rejected"
 *       400:
 *         description: Missing or invalid parameters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Invalid parameters. Please check the inputs."
 *       401:
 *         description: Unauthorized (Missing or invalid token).
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Unauthorized request. Please provide a valid token."
 */
/**
 * @swagger
 * /portal/team/getDayInOutDetailsEMPManager:
 *   get:
 *     summary: Get Employee In/Out Details
 *     description: Fetches the daily in/out details of an employee under a specific manager for a given date.
 *     tags:
 *       - Team
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: ManagerId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 3165
 *         description: Manager's registration ID.
 *       - in: query
 *         name: date
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         example: "2024-04-16"
 *         description: Date for fetching in/out details.
 *       - in: query
 *         name: regid
 *         required: false
 *         schema:
 *           type: integer
 *         example: 2898
 *         description: Employee's registration ID (optional).
 *     responses:
 *       200:
 *         description: In/Out details retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "In/Out details retrieved successfully."
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       regid:
 *                         type: integer
 *                         example: 2898
 *                       in_time:
 *                         type: string
 *                         format: time
 *                         example: "09:00 AM"
 *                       out_time:
 *                         type: string
 *                         format: time
 *                         example: "06:00 PM"
 *                       total_hours:
 *                         type: string
 *                         example: "9h 00m"
 *       400:
 *         description: Missing or invalid parameters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Invalid parameters. Please check the inputs."
 *       401:
 *         description: Unauthorized (Missing or invalid token).
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Unauthorized request. Please provide a valid token."
 */
/**
 * @swagger
 * /portal/team/IsManager:
 *   get:
 *     summary: Check if Employee is a Manager
 *     description: Returns whether the given employee is a manager or not.
 *     tags:
 *       - Team
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: regid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 173
 *         description: Employee's registration ID.
 *     responses:
 *       200:
 *         description: Manager check result.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 ResultData:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       IsManager:
 *                         type: boolean
 *                         example: false
 *                 message:
 *                   type: string
 *                   example: "Query executed successfully."
 *       400:
 *         description: Missing or invalid parameters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Invalid regid provided."
 *       401:
 *         description: Unauthorized (Missing or invalid token).
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Unauthorized request. Please provide a valid token."
 */
