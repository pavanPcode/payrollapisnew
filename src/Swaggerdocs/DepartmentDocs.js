/**
 * @swagger
 * /portal/department/createdepartment:
 *   post:
 *     summary: Create a Department
 *     description: Adds a new department under a given supervisor.
 *     tags:
 *       - Department
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
 *                 description: Supervisor ID under whom the department is created.
 *               name:
 *                 type: string
 *                 example: "HR"
 *                 description: Name of the department.
 *               code:
 *                 type: string
 *                 example: "HR100"
 *                 description: Unique code for the department.
 *     responses:
 *       201:
 *         description: Department created successfully.
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
 * /portal/department/updatedepartment:
 *   post:
 *     summary: Update a Department
 *     description: Updates an existing department's details.
 *     tags:
 *       - Department
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               departmentid:
 *                 type: integer
 *                 example: 8
 *                 description: Unique ID of the department to update.
 *               superid:
 *                 type: integer
 *                 example: 10000
 *                 description: Supervisor ID associated with the department.
 *               name:
 *                 type: string
 *                 example: "GENERAL"
 *                 description: Updated name of the department.
 *               code:
 *                 type: string
 *                 example: "GN"
 *                 description: Updated department code.
 *     responses:
 *       200:
 *         description: Department updated successfully.
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
 *       404:
 *         description: Department not found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
/**
 * @swagger
 * /portal/department/deletedepartment:
 *   post:
 *     summary: Delete a Department
 *     description: Removes a department using its unique ID.
 *     tags:
 *       - Department
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               departmentid:
 *                 type: integer
 *                 example: 148
 *                 description: Unique ID of the department to be deleted.
 *     responses:
 *       200:
 *         description: Department deleted successfully.
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
 * /portal/department/getdepartment:
 *   get:
 *     summary: Get Departments
 *     description: Fetches the list of departments under a given supervisor.
 *     tags:
 *       - Department
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: superid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 10000
 *         description: Supervisor ID to fetch associated departments.
 *     responses:
 *       200:
 *         description: Departments retrieved successfully.
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
 * /portal/department/getEmpByDept:
 *   get:
 *     summary: Get Employees by Department
 *     description: Fetches the list of employees under a given department and supervisor.
 *     tags:
 *       - Department
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: departmentid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 8
 *         description: Department ID to fetch employees.
 *       - in: query
 *         name: superid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 10000
 *         description: Supervisor ID associated with the department.
 *     responses:
 *       200:
 *         description: Employees retrieved successfully.
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
