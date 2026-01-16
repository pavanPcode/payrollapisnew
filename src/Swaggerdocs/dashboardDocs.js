/**
 * @swagger
 * /portal/dashboard/getdashboardcount:
 *   get:
 *     summary: Get Dashboard Count
 *     description: Retrieves the dashboard counts for a specific super admin ID.
 *     tags:
 *       - Dashboard
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: superid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 10000
 *         description: Super Admin ID to fetch the dashboard data
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
 *         description: Dashboard count data retrieved successfully
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
