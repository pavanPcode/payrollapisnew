
 /**
 * @swagger
 * /portal/fileupload/UploadEmpImages:
 *   post:
 *     summary: Upload multiple images
 *     description: Upload up to 6 images associated with a specific user and listing.
 *     tags:
 *       - Empfileupload
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               files:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                 description: >-
 *                   Array of image files to upload. A maximum of 6 files is allowed.
 *               superid:
 *                 type: integer
 *                 description: superid ID associated with the uploaded images
 *                 example: 10000
 *               regid:
 *                 type: integer
 *                 description: regid ID associated with the uploaded images
 *                 example: 136
 *               fileType:
 *                 type: integer
 *                 description: type of uploaded uploaded images
 *                 example: 1
 *     responses:
 *       200:
 *         description: File uploaded and linked successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SingleRecordSuccessResponse'
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 */





 
/**
 * @swagger
 * /portal/fileupload/empfilepaths:
 *   get:
 *     summary: Get file paths from emp files table
 *     description: Returns file paths by providing superid and regid
 *     tags:
 *       - Empfileupload
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: superid
 *         in: query
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the superid
 *         example: 10000
 *       - name: regid
 *         in: query
 *         required: true
 *         schema:
 *           type: integer
 *           example: 
 *         description: regesterdid 
 *         example: 136
 *     responses:
 *       200:
 *         description: File paths successfully fetched
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
 *         description: Unauthorized - Invalid token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */





/**
 * @swagger
 * /portal/fileupload/empfiledownload:
 *   get:
 *     summary: Download a file from FTP server using file path.
 *     description: Pass the file path stored in empfile table to download the file from FTP.
 *     tags:
 *       - Empfileupload
 *     parameters:
 *       - in: query
 *         name: path
 *         required: true
 *         example: /rollcallempfiles/10000/136/4276_perennial-code-product.webp
 *         schema:
 *           type: string
 *         description: The full FTP file path to download.
 *     responses:
 *       200:
 *         description: File downloaded successfully.
 *         content:
 *           application/octet-stream:
 *             schema:
 *               type: string
 *               format: binary
 *       400:
 *         description: Missing or invalid parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized - Invalid token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */




 
/**
 * @swagger
 * /portal/fileupload/empfilesdelete:
 *   get:
 *     summary: soft deletes the images based on ids
 *     description: deletes the images as soft delete
 *     tags:
 *       - Empfileupload
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: superid
 *         in: query
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the superid
 *         example: 10000
 *       - name: regid
 *         in: query
 *         required: true
 *         schema:
 *           type: integer
 *           example: 
 *         description: regesterdid 
 *         example: 136
 *       - name: ImageId
 *         in: query
 *         required: true
 *         schema:
 *           type: integer
 *           example: 
 *         description: id of image 
 *         example: 13
 *     responses:
 *       200:
 *         description: File paths successfully fetched
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
 *         description: Unauthorized - Invalid token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */



