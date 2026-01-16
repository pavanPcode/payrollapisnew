/**
 * @swagger
 * /portal/notification/getNotification:
 *   get:
 *     summary: Get Employee Notifications
 *     description: Fetches notifications for a specific employee under a given supervisor.
 *     tags:
 *       - Notification
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
 *         name: regid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 3694
 *         description: Employee Registration ID.
 *     responses:
 *       200:
 *         description: Notifications retrieved successfully.
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
