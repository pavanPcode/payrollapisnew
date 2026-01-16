/**
 * @swagger
 * components:
 *   securitySchemes:  
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *
 *   schemas:  
 *     SingleRecordSuccessResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *           example: true
 *         message:
 *           type: string
 *           example: " successful"
 *         ResultData:
 *           type: object
 *
 *     ArraySuccessResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *           example: true
 *         message:
 *           type: string
 *           example: " successful"
 *         ResultData:
 *           type: array
 *           items:
 *             type: object
 *
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *           example: false
 *         message:
 *           type: string
 *           example: "Something went wrong"
 *         ResultData:
 *           type: array
 *           items:
 *             type: object
 *           example: []
 *     PunchTypeSuccessResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *           example: true
 *         message:
 *           type: string
 *           example: "Query executed successfully."
 *         ResultData:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               PunchType:
 *                 type: string
 *                 example: "In or Out"
 *     WriteSwipeRequest:
 *       type: object
 *       required:
 *         - superid
 *         - regid
 *         - cardid
 *         - dateoftransaction
 *       properties:
 *         superid:
 *           type: integer
 *           example: 10200
 *         regid:
 *           type: integer
 *           example: 32031
 *         cardid:
 *           type: integer
 *           example: 583
 *         dateoftransaction:
 *           type: string
 *           format: date-time
 *           example: "2026-03-05 10:00:00"
 *         Latitude:
 *           type: string
 *           example: "17.393027147598918"
 *         Longitude:
 *           type: string
 *           example: "78.50922086976222"
 *         address:
 *           type: string
 *           example: "Hyderabad, India"
 *         notes:
 *           type: string
 *           example: "test"
 */
