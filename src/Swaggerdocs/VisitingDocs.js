/**
 * @swagger
 * /portal/visiting/requestVisitingPass:
 *   post:
 *     summary: Request a Visiting Pass
 *     description: Allows a user to request a visiting pass with visitor details.
 *     tags:
 *       - Visiting
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               RegId:
 *                 type: integer
 *                 example: 99
 *                 description: Registration ID of the requester.
 *               RelType:
 *                 type: string
 *                 example: "1"
 *                 description: Relationship type with the visitor.
 *               VisitorName:
 *                 type: string
 *                 example: "John Doe"
 *                 description: Name of the primary visitor.
 *               PhoneNumber:
 *                 type: string
 *                 example: "9876543210"
 *                 description: Contact number of the visitor.
 *               Email:
 *                 type: string
 *                 example: "john.doe@example.com"
 *                 description: Email of the visitor.
 *               VehicleInfo:
 *                 type: string
 *                 example: "KA01AB1234"
 *                 description: Vehicle details of the visitor.
 *               NoOfMembers:
 *                 type: string
 *                 example: "2"
 *                 description: Number of people visiting.
 *               ReturnableMaterial:
 *                 type: string
 *                 example: "Laptop"
 *                 description: Items brought by the visitor that will be returned.
 *               Remarks:
 *                 type: string
 *                 example: "Meeting with HR"
 *                 description: Additional notes about the visit.
 *               SuperId:
 *                 type: integer
 *                 example: 99
 *                 description: Supervisor ID approving the visit.
 *               Date:
 *                 type: string
 *                 format: date
 *                 example: "2024-11-14"
 *                 description: Date of the visit.
 *               Status:
 *                 type: integer
 *                 example: 1
 *                 description: Status of the visiting pass request (e.g., 1 = Pending).
 *               CreatedBy:
 *                 type: integer
 *                 example: 1
 *                 description: ID of the person who created the request.
 *               visitors:
 *                 type: array
 *                 description: List of additional visitors.
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "Alice"
 *                     number:
 *                       type: string
 *                       example: "9876543211"
 *                     email:
 *                       type: string
 *                       example: "alice@example.com"
 *     responses:
 *       200:
 *         description: Visiting pass request submitted successfully.
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
 *                   example: "Visiting pass request submitted successfully."
 *                 data:
 *                   type: object
 *                   properties:
 *                     requestId:
 *                       type: integer
 *                       example: 12345
 *       400:
 *         description: Missing or invalid request parameters.
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
 *                   example: "Invalid request data."
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
 * /portal/visiting/getVisitingPass:
 *   get:
 *     summary: Get Visiting Pass Details
 *     description: Retrieves the details of a visiting pass based on the registration ID.
 *     tags:
 *       - Visiting
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: regid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 99
 *         description: Registration ID of the requester.
 *     responses:
 *       200:
 *         description: Visiting pass details retrieved successfully.
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
 *                   example: "Visiting pass details retrieved successfully."
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       VisitingPassId:
 *                         type: integer
 *                         example: 12345
 *                       RegId:
 *                         type: integer
 *                         example: 99
 *                       VisitorName:
 *                         type: string
 *                         example: "John Doe"
 *                       PhoneNumber:
 *                         type: string
 *                         example: "9876543210"
 *                       Email:
 *                         type: string
 *                         example: "john.doe@example.com"
 *                       VehicleInfo:
 *                         type: string
 *                         example: "KA01AB1234"
 *                       NoOfMembers:
 *                         type: integer
 *                         example: 2
 *                       ReturnableMaterial:
 *                         type: string
 *                         example: "Laptop"
 *                       Remarks:
 *                         type: string
 *                         example: "Meeting with HR"
 *                       SuperId:
 *                         type: integer
 *                         example: 99
 *                       Date:
 *                         type: string
 *                         format: date
 *                         example: "2024-11-14"
 *                       Status:
 *                         type: integer
 *                         example: 1
 *                       CreatedBy:
 *                         type: integer
 *                         example: 1
 *       400:
 *         description: Missing or invalid request parameters.
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
 *                   example: "Invalid registration ID."
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
 * /portal/visiting/getAttendeesDetails:
 *   get:
 *     summary: Get Attendees Details
 *     description: Retrieves the details of attendees based on the visiting pass ID.
 *     tags:
 *       - Visiting
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: passid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 5
 *         description: Visiting Pass ID to fetch attendee details.
 *     responses:
 *       200:
 *         description: Attendee details retrieved successfully.
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
 *                   example: "Attendee details retrieved successfully."
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       AttendeeId:
 *                         type: integer
 *                         example: 101
 *                       Name:
 *                         type: string
 *                         example: "John Doe"
 *                       PhoneNumber:
 *                         type: string
 *                         example: "9876543210"
 *                       Email:
 *                         type: string
 *                         example: "john.doe@example.com"
 *                       PassId:
 *                         type: integer
 *                         example: 5
 *       400:
 *         description: Missing or invalid request parameters.
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
 *                   example: "Invalid pass ID."
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
 * /portal/visiting/updatetVisitingPass:
 *   post:
 *     summary: Update Visiting Pass
 *     description: Updates an existing visiting pass with new details.
 *     tags:
 *       - Visiting
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               RegId:
 *                 type: integer
 *                 example: 99
 *                 description: Registration ID of the visitor.
 *               RelType:
 *                 type: string
 *                 example: "1"
 *                 description: Relationship type.
 *               VisitorName:
 *                 type: string
 *                 example: "John Doe"
 *                 description: Name of the visitor.
 *               PhoneNumber:
 *                 type: string
 *                 example: "9876543210"
 *                 description: Contact number of the visitor.
 *               Email:
 *                 type: string
 *                 example: "john.doe@example.com"
 *                 description: Email of the visitor.
 *               VehicleInfo:
 *                 type: string
 *                 example: "Car - TS09AB1234"
 *                 description: Vehicle information.
 *               NoOfMembers:
 *                 type: string
 *                 example: "2"
 *                 description: Number of members in the visiting group.
 *               ReturnableMaterial:
 *                 type: string
 *                 example: "Laptop"
 *                 description: Any returnable material carried by the visitor.
 *               Remarks:
 *                 type: string
 *                 example: "Meeting with HR"
 *                 description: Additional remarks.
 *               id:
 *                 type: integer
 *                 example: 6
 *                 description: Visiting pass ID to be updated.
 *               Date:
 *                 type: string
 *                 format: date
 *                 example: "2024-11-14"
 *                 description: Date of the visit.
 *               Status:
 *                 type: integer
 *                 example: 99
 *                 description: Status of the visiting pass.
 *               UpdatedBy:
 *                 type: integer
 *                 example: 2
 *                 description: ID of the user updating the visiting pass.
 *     responses:
 *       200:
 *         description: Visiting pass updated successfully.
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
 *                   example: "Visiting pass updated successfully."
 *       400:
 *         description: Missing or invalid request parameters.
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
 *                   example: "Invalid request data."
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
