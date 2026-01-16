/**
 * @swagger
 * /portal/Mails/addqueuemail:
 *   post:
 *     summary: Add Email to Queue
 *     description: Sends an email by adding it to the mail queue.
 *     tags:
 *       - Mails
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
 *                 description: Supervisor ID
 *               ToAddress:
 *                 type: string
 *                 format: email
 *                 example: pavan@perennialcode.in
 *                 description: Primary recipient email address
 *               Message:
 *                 type: string
 *                 example: Test message
 *                 description: Content of the email
 *               Subject:
 *                 type: string
 *                 example: TestMessage
 *                 description: Subject line of the email
 *               CCEmail:
 *                 type: string
 *                 format: email
 *                 example: pavan@perennialcode.in
 *                 description: CC email address (optional)
 *             required:
 *               - superid
 *               - ToAddress
 *               - Message
 *               - Subject
 *     responses:
 *       200:
 *         description: Email added to queue successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessResponse'
 *       400:
 *         description: Missing or invalid request parameters
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
 * /portal/Mails/bulkemail:
 *   get:
 *     summary: Get Active Mail Queue Count
 *     description: Returns the number of active mails in the queue that need to be sent.
 *     tags:
 *       - Mails
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: reccnt
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *         description: Number of records to fetch (used to limit the count for processing)
 *     responses:
 *       200:
 *         description: Count of active mails retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 count:
 *                   type: integer
 *                   example: 5
 *                   description: Number of active mails in queue
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
