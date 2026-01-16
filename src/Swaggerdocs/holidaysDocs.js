/**
 * @swagger
 * /portal/holidays/getholidays:
 *   get:
 *     summary: Get Holidays
 *     description: Fetches the list of holidays for a given supervisor and year.
 *     tags:
 *       - Holidays
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: superid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 31113
 *         description: Supervisor ID to fetch holidays.
 *       - in: query
 *         name: year
 *         required: true
 *         schema:
 *           type: integer
 *         example: 2019
 *         description: Year for which to fetch holidays.
 *     responses:
 *       200:
 *         description: Holidays retrieved successfully.
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
 * /portal/holidays/createHolidays:
 *   post:
 *     summary: Create a Holiday
 *     description: Adds a new holiday for a given supervisor.
 *     tags:
 *       - Holidays
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
 *                 description: Supervisor ID for whom the holiday is being created.
 *               holidaydt:
 *                 type: string
 *                 format: date
 *                 example: "2027-04-01"
 *                 description: Date of the holiday.
 *               reason:
 *                 type: string
 *                 example: "ac"
 *                 description: Reason for the holiday.
 *               createdby:
 *                 type: integer
 *                 example: 22
 *                 description: User ID of the creator.
 *               optional:
 *                 type: integer
 *                 enum: [0, 1]
 *                 example: 1
 *                 description: Specifies whether the holiday is optional (1) or not (0).
 *     responses:
 *       201:
 *         description: Holiday created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessResponse'
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
 * /portal/holidays/updateholiday:
 *   post:
 *     summary: Update a Holiday
 *     description: Updates an existing holiday for a given supervisor.
 *     tags:
 *       - Holidays
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               holidayid:
 *                 type: integer
 *                 example: 170
 *                 description: Unique ID of the holiday to update.
 *               superid:
 *                 type: integer
 *                 example: 10000
 *                 description: Supervisor ID associated with the holiday.
 *               holidaydt:
 *                 type: string
 *                 format: date
 *                 example: "2027-04-02"
 *                 description: Updated date of the holiday.
 *               reason:
 *                 type: string
 *                 example: "test"
 *                 description: Updated reason for the holiday.
 *               createdby:
 *                 type: integer
 *                 example: 22
 *                 description: User ID of the person updating the holiday.
 *               optional:
 *                 type: integer
 *                 enum: [0, 1]
 *                 example: 1
 *                 description: Specifies whether the holiday is optional (1) or not (0).
 *     responses:
 *       200:
 *         description: Holiday updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessResponse'
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
 *         description: Holiday not found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
/**
 * @swagger
 * /portal/holidays/deleteholiday:
 *   post:
 *     summary: Delete a Holiday
 *     description: Removes a holiday using its unique ID.
 *     tags:
 *       - Holidays
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               holidayid:
 *                 type: integer
 *                 example: 170
 *                 description: Unique ID of the holiday to be deleted.
 *     responses:
 *       200:
 *         description: Holiday deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessResponse'
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
 *         description: Holiday not found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
