/**
 * @swagger
 * /portal/education/createRegeducationdetails:
 *   post:
 *     summary: Insert a new Education record
 *     description: Adds a new education record for a user in the RegEducation table.
 *     tags:
 *       - Education
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
 *                 example: 10023
 *                 description: Supervisor ID associated with the education record.
 *               RegId:
 *                 type: integer
 *                 example: 3215
 *                 description: RegId ID associated with the education record.
 *               qualification:
 *                 type: string
 *                 example: "B.Tech"
 *                 description: Qualification of the user.
 *               college:
 *                 type: string
 *                 example: "XYZ University"
 *                 description: College name.
 *               university:
 *                 type: string
 *                 example: "ABC University"
 *                 description: University name.
 *               percentage:
 *                 type: string
 *                 example: "75%"
 *                 description: Percentage obtained in the qualification.
 *               CreatedBy:
 *                 type: integer
 *                 example: 123
 *                 description: created userid
 *     responses:
 *       200:
 *         description: Education record inserted successfully.
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
 * /portal/education/updateRegeducationdetails:
 *   post:
 *     summary: Update an Education record
 *     description: Updates an existing education record for a user in the RegEducation table. If no value is provided, it will retain the previous value.
 *     tags:
 *       - Education
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               educationid:
 *                 type: integer
 *                 example: 1
 *                 description: Unique ID of the education record to update.
 *               superid:
 *                 type: integer
 *                 example: 10023
 *                 description: Supervisor ID associated with the education record.
 *               RegId:
 *                 type: integer
 *                 example: 3215
 *                 description: RegId ID associated with the education record.
 *               qualification:
 *                 type: string
 *                 example: "M.Tech"
 *                 description: Updated qualification. If not provided, the previous value is retained.
 *               college:
 *                 type: string
 *                 example: "XYZ University"
 *                 description: Updated college name. If not provided, the previous value is retained.
 *               university:
 *                 type: string
 *                 example: "ABC University"
 *                 description: Updated university name. If not provided, the previous value is retained.
 *               percentage:
 *                 type: string
 *                 example: "80"
 *                 description: Updated percentage. If not provided, the previous value is retained.
 *               UpdatedBy:
 *                 type: integer
 *                 example: 1234
 *                 description: UpdatedBy userid
 *     responses:
 *       200:
 *         description: Education record updated successfully.
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
 *         description: Education record not found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */



/**
 * @swagger
 * /portal/education/getRegeducationdetails:
 *   get:
 *     summary: Get Education Details by RegId
 *     description: Fetches all education records from RegEducation table matching the given RegId
 *     tags:
 *       - Education
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: regid
 *         in: query
 *         required: true
 *         schema:
 *           type: integer
 *         description: Registration ID of the user.
 *         example: 2413
 *     responses:
 *       200:
 *         description: Education records fetched successfully.
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
 *         description: No education records found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
