/**
 * @swagger
 * /portal/projects/createproject:
 *   post:
 *     summary: Create a new project
 *     description: Creates a new project with the given details.
 *     tags:
 *       - Projects
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "BookMyOT"
 *               customerid:
 *                 type: integer
 *                 example: 1
 *               startdate:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-04-04 12:00:00"
 *               enddate:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-04-05 12:00:00"
 *               status:
 *                 type: integer
 *                 example: 1
 *               managerid:
 *                 type: integer
 *                 example: 3694
 *               superid:
 *                 type: integer
 *                 example: 10000
 *     responses:
 *       200:
 *         description: Project Created successfully
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
 * /portal/projects/updateproject:
 *   post:
 *     summary: Update an existing project
 *     description: Updates the details of an existing project.
 *     tags:
 *       - Projects
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               projectid:
 *                 type: integer
 *                 example: 1
 *               title:
 *                 type: string
 *                 example: "test8"
 *               customerid:
 *                 type: integer
 *                 example: 1
 *               startdate:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-04-04 12:00:00"
 *               enddate:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-04-05 12:00:00"
 *               status:
 *                 type: integer
 *                 example: 1
 *               managerid:
 *                 type: integer
 *                 example: 3694
 *               superid:
 *                 type: integer
 *                 example: 10000
 *     responses:
 *       200:
 *         description: Project updated successfully
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
 * /portal/projects/deleteproject:
 *   post:
 *     summary: Delete a project
 *     description: Deletes an existing project by its project ID.
 *     tags:
 *       - Projects
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               projectid:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Project deleted successfully
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
 * /portal/projects/getproject:
 *   get:
 *     summary: Get project details
 *     description: Fetches project details for a given manager ID.
 *     tags:
 *       - Projects
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: managerid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 3694
 *         description: Manager ID to fetch projects.
 *     responses:
 *       200:
 *         description: Project details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ArraySuccessResponse'
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
 * /portal/projects/getProjectsForEmp:
 *   get:
 *     summary: Get projects assigned to an employee
 *     description: Fetches all projects assigned to a specific employee based on their registration ID.
 *     tags:
 *       - Projects
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: regid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 3617
 *         description: Employee Registration ID to fetch assigned projects.
 *     responses:
 *       200:
 *         description: Projects retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ArraySuccessResponse'
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
 * /portal/projects/createprojectteam:
 *   post:
 *     summary: Add an employee to a project team
 *     description: Assigns an employee to a project under a supervisor.
 *     tags:
 *       - Projectsteam
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
 *                 example: 31465
 *                 description: Employee Registration ID
 *               superid:
 *                 type: integer
 *                 example: 10260
 *                 description: Supervisor ID
 *               projectid:
 *                 type: integer
 *                 example: 2
 *                 description: Project ID to assign the employee
 *               createdby:
 *                 type: integer
 *                 example: 31465
 *                 description: User ID who is adding the team member
 *     responses:
 *       200:
 *         description: Employee successfully added to the project team
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
 * /portal/projects/getprojectteam:
 *   get:
 *     summary: Get project team members
 *     description: Fetches the list of employees assigned to a specific project.
 *     tags:
 *       - Projectsteam
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: projectid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 2
 *         description: Project ID for which to retrieve the team members.
 *     responses:
 *       200:
 *         description: Fetches the list of employees in  project team
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
 * /portal/projects/deleteprojectteam:
 *   post:
 *     summary: Remove a member from the project team
 *     description: Deletes a project team member based on the given project team ID.
 *     tags:
 *       - Projectsteam
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               projectteamid:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Employee successfully deleted to the project team
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
 * /portal/projects/createmilestone:
 *   post:
 *     summary: Create a milestone for a project
 *     description: Creates a milestone with a start date, end date, and description for a specific project.
 *     tags:
 *       - milestone
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               projectid:
 *                 type: integer
 *                 example: 2
 *               startdate:
 *                 type: string
 *                 format: date-time
 *                 example: "2014-04-04 01:00:00"
 *               enddate:
 *                 type: string
 *                 format: date-time
 *                 example: "2014-04-04 09:00:00"
 *               description:
 *                 type: string
 *                 example: "test1111111111"
 *               superid:
 *                 type: integer
 *                 example: 10000
 *               createdby:
 *                 type: integer
 *                 example: 3693
 *     responses:
 *       200:
 *         description: milestone successfully Created
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
 * /portal/projects/updatemilestone:
 *   post:
 *     summary: Update an existing milestone
 *     description: Updates the details of a milestone for a specific project.
 *     tags:
 *       - milestone
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               milestoneid:
 *                 type: integer
 *                 example: 1
 *               projectid:
 *                 type: integer
 *                 example: 2
 *               startdate:
 *                 type: string
 *                 format: date-time
 *                 example: "2014-04-04 01:00:00"
 *               enddate:
 *                 type: string
 *                 format: date-time
 *                 example: "2014-04-04 09:00:00"
 *               description:
 *                 type: string
 *                 example: "test23333333333"
 *               superid:
 *                 type: integer
 *                 example: 10000
 *     responses:
 *       200:
 *         description: milestone successfully updated
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
 * /portal/projects/deletemilestone:
 *   post:
 *     summary: Delete a milestone
 *     description: Deletes a milestone based on the given milestone ID.
 *     tags:
 *       - milestone
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               milestoneid:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: milestone successfully deleted
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
 * /portal/projects/getmilestone:
 *   get:
 *     summary: Get project milestones
 *     description: Retrieves all milestones for a given project ID.
 *     tags:
 *       - milestone
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: projectid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 2
 *         description: The project ID for which milestones are fetched.
 *     responses:
 *       200:
 *         description: milestones successfully   fetched.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SingleRecordSuccessResponse'
 *       400:
 *         description: Missing or invalid project ID.
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
 * /portal/projects/createtask:
 *   post:
 *     summary: Create a new task
 *     description: Creates a new task under a specified project and milestone.
 *     tags:
 *       - task
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Development"
 *               description:
 *                 type: string
 *                 example: "Dev team task"
 *               projectid:
 *                 type: integer
 *                 example: 2
 *               milestoneid:
 *                 type: integer
 *                 example: 2
 *               startdate:
 *                 type: string
 *                 format: date-time
 *                 example: "2014-04-04 01:00:00"
 *               enddate:
 *                 type: string
 *                 format: date-time
 *                 example: "2014-04-04 09:00:00"
 *               priority:
 *                 type: integer
 *                 example: 2
 *               superid:
 *                 type: integer
 *                 example: 10000
 *               createdby:
 *                 type: integer
 *                 example: 3694
 *     responses:
 *       200:
 *         description: Task created successfully.
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
 * /portal/projects/updatetask:
 *   post:
 *     summary: Update an existing task
 *     description: Updates details of a task under a specified project and milestone.
 *     tags:
 *       - task
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               taskid:
 *                 type: integer
 *                 example: 1
 *               title:
 *                 type: string
 *                 example: "Updated Task Title"
 *               description:
 *                 type: string
 *                 example: "Updated task description"
 *               projectid:
 *                 type: integer
 *                 example: 2
 *               milestoneid:
 *                 type: integer
 *                 example: 2
 *               startdate:
 *                 type: string
 *                 format: date-time
 *                 example: "2014-04-04 01:00:00"
 *               enddate:
 *                 type: string
 *                 format: date-time
 *                 example: "2014-04-04 09:00:00"
 *               priority:
 *                 type: integer
 *                 example: 2
 *               superid:
 *                 type: integer
 *                 example: 10000
 *     responses:
 *       200:
 *         description: Task updated successfully.
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
 * /portal/projects/deletetask:
 *   post:
 *     summary: Delete a task
 *     description: Deletes a task based on the given task ID.
 *     tags:
 *       - task
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               taskid:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Task deleted successfully
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
 * /portal/projects/gettask:
 *   get:
 *     summary: Get tasks for a project
 *     description: Retrieves all tasks for a given project ID.
 *     tags:
 *       - task
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: projectid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 2
 *         description: The project ID for which tasks are fetched.
 *     responses:
 *       200:
 *         description: Retrieves  tasks successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SingleRecordSuccessResponse'
 *       400:
 *         description: Missing or invalid project ID.
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
 * /portal/projects/gettimesheetbytaskid:
 *   get:
 *     summary: Get timesheet entries for a task
 *     description: Retrieves all timesheet entries for a given task ID.
 *     tags:
 *       - Timesheets
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: taskid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *         description: The task ID for which timesheet entries are fetched.
 *     responses:
 *       200:
 *         description: Timesheet entries retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SingleRecordSuccessResponse'
 *       400:
 *         description: Missing or invalid task ID.
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
 * /portal/projects/createtimesheet:
 *   post:
 *     summary: Create a new timesheet entry
 *     description: Adds a new timesheet entry for a specific task.
 *     tags:
 *       - Timesheets
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               taskid:
 *                 type: integer
 *                 example: 1
 *                 description: The ID of the task.
 *               date:
 *                 type: string
 *                 format: date
 *                 example: "2024-04-06"
 *                 description: The date of the timesheet entry.
 *               description:
 *                 type: string
 *                 example: "Development of services."
 *                 description: Description of the work done.
 *               starttime:
 *                 type: string
 *                 format: time
 *                 example: "12:00:00"
 *                 description: Start time of the work.
 *               endtime:
 *                 type: string
 *                 format: time
 *                 example: "13:00:00"
 *                 description: End time of the work.
 *               regid:
 *                 type: integer
 *                 example: 3693
 *                 description: Employee registration ID.
 *               superid:
 *                 type: integer
 *                 example: 10000
 *                 description: Supervisor ID.
 *               createdby:
 *                 type: integer
 *                 example: 3693
 *                 description: The user ID of the person who created the timesheet.
 *     responses:
 *       200:
 *         description: Timesheet entry created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SingleRecordSuccessResponse'
 *       400:
 *         description: Missing or invalid request data.
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
 * /portal/projects/updatetimesheet:
 *   post:
 *     summary: Update an existing timesheet entry
 *     description: Modifies an existing timesheet entry with new details.
 *     tags:
 *       - Timesheets
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               timesheetid:
 *                 type: integer
 *                 example: 1
 *                 description: The ID of the timesheet entry to update.
 *               taskid:
 *                 type: integer
 *                 example: 1
 *                 description: The associated task ID.
 *               date:
 *                 type: string
 *                 format: date
 *                 example: "2024-04-06"
 *                 description: The date of the timesheet entry.
 *               description:
 *                 type: string
 *                 example: "Testing time sheet update."
 *                 description: Updated description of the work done.
 *               starttime:
 *                 type: string
 *                 format: time
 *                 example: "12:00:00"
 *                 description: Updated start time of the work.
 *               endtime:
 *                 type: string
 *                 format: time
 *                 example: "13:00:00"
 *                 description: Updated end time of the work.
 *               regid:
 *                 type: integer
 *                 example: 3693
 *                 description: Employee registration ID.
 *               superid:
 *                 type: integer
 *                 example: 10000
 *                 description: Supervisor ID.
 *     responses:
 *       200:
 *         description: Timesheet entry updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SingleRecordSuccessResponse'
 *       400:
 *         description: Missing or invalid request data.
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
 * /portal/projects/deletetimesheet:
 *   post:
 *     summary: Delete a timesheet entry
 *     description: Removes a timesheet entry by its ID.
 *     tags:
 *       - Timesheets
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               timesheetid:
 *                 type: integer
 *                 example: 1
 *                 description: The ID of the timesheet entry to delete.
 *     responses:
 *       200:
 *         description: Timesheet entry deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SingleRecordSuccessResponse'
 *       400:
 *         description: Missing or invalid request data.
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
 * /portal/projects/gettimesheetbyregid:
 *   get:
 *     summary: Get timesheets by employee registration ID
 *     description: Retrieves all timesheet entries for a specific employee (regid).
 *     tags:
 *       - Timesheets
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: regid
 *         schema:
 *           type: integer
 *         required: true
 *         example: 3693
 *         description: The employee's registration ID.
 *     responses:
 *       200:
 *         description: Successfully retrieved timesheets.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SingleRecordSuccessResponse'
 *       400:
 *         description: Missing or invalid registration ID.
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
