/**
 * @swagger
 * /portal/emp/getempprofile:
 *   get:
 *     summary: Get Employee Profile
 *     description: Fetches employee profile based on registration ID
 *     tags:
 *       - Employee
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: regid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 3209
 *         description: Registration ID of the employee
 *     responses:
 *       200:
 *         description: Employee profile retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SingleRecordSuccessResponse'
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
/**
 * @swagger
 * /portal/emp/getemployees:
 *   get:
 *     summary: Get Employees under Supervisor
 *     description: Fetches a list of employees reporting to a supervisor ID
 *     tags:
 *       - Employee
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: superid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 10000
 *         description: Supervisor ID to fetch employees under their management
 *     responses:
 *       200:
 *         description: List of employees retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ArraySuccessResponse'
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
/**
 * @swagger
 * /portal/emp/getEmployee:
 *   get:
 *     summary: Get Employee Details
 *     description: Fetches employee details based on super ID, department ID, and registration ID.
 *     tags:
 *       - Employee
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: superid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 10000
 *         description: Super ID of the organization.
 *       - in: query
 *         name: departmentid
 *         required: false
 *         schema:
 *           type: string
 *         example: "8"
 *         description: ID of the department. If empty, retrieves all employees.
 *       - in: query
 *         name: regid
 *         required: false
 *         schema:
 *           type: string
 *         example: "3209"
 *         description: Registration ID of the employee. If empty, retrieves all employees.
 *     responses:
 *       200:
 *         description: Employee details retrieved successfully.
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
 * /portal/emp/createEmployee:
 *   post:
 *     summary: Create a New Employee
 *     description: Adds a new employee to the system.
 *     tags:
 *       - Employee
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
 *                 description: Super ID of the organization.
 *               badge:
 *                 type: string
 *                 example: "1413"
 *                 description: Employee badge number.
 *               username:
 *                 type: string
 *                 example: "NVN"
 *                 description: Employee's name.
 *               dateofbirth:
 *                 type: string
 *                 format: date
 *                 example: "2002-01-01"
 *                 description: Date of birth (YYYY-MM-DD).
 *               designation:
 *                 type: string
 *                 example: "Emp"
 *                 description: Employee's designation.
 *               cardid:
 *                 type: string
 *                 example: "1001"
 *                 description: Card ID assigned to the employee.
 *               mobile:
 *                 type: string
 *                 example: "1"
 *                 description: Mobile number of the employee.
 *               rfid:
 *                 type: string
 *                 example: "sss"
 *                 description: RFID tag for access control.
 *               gender:
 *                 type: string
 *                 example: "1"
 *                 description: Gender (1 for Male, 2 for Female, etc.).
 *               branchid:
 *                 type: integer
 *                 example: 71
 *                 description: Branch ID where the employee is assigned.
 *               departmentid:
 *                 type: integer
 *                 example: 8
 *                 description: Department ID where the employee works.
 *               doj:
 *                 type: string
 *                 format: date
 *                 example: "2024-01-01"
 *                 description: Date of joining (YYYY-MM-DD).
 *               createdby:
 *                 type: integer
 *                 example: 7
 *                 description: ID of the user who created the employee record.
 *     responses:
 *       201:
 *         description: Employee created successfully.
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
 * /portal/emp/updateEmployee:
 *   post:
 *     summary: Update Employee Details
 *     description: Updates an existing employee's details in the system.
 *     tags:
 *       - Employee
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
 *                 description: Super ID of the organization.
 *               badge:
 *                 type: string
 *                 example: "1000"
 *                 description: Employee badge number.
 *               username:
 *                 type: string
 *                 example: "test1010"
 *                 description: Employee's name.
 *               dateofbirth:
 *                 type: string
 *                 format: date
 *                 example: "2002-01-01"
 *                 description: Date of birth (YYYY-MM-DD).
 *               designation:
 *                 type: string
 *                 example: "Emp"
 *                 description: Employee's designation.
 *               cardid:
 *                 type: string
 *                 example: "1000"
 *                 description: Card ID assigned to the employee.
 *               mobile:
 *                 type: string
 *                 example: "9866954"
 *                 description: Mobile number of the employee.
 *               rfid:
 *                 type: string
 *                 example: ""
 *                 description: RFID tag for access control (optional).
 *               gender:
 *                 type: string
 *                 example: "1"
 *                 description: Gender (1 for Male, 2 for Female, etc.).
 *               branchid:
 *                 type: integer
 *                 example: 2
 *                 description: Branch ID where the employee is assigned.
 *               departmentid:
 *                 type: integer
 *                 example: 8
 *                 description: Department ID where the employee works.
 *               doj:
 *                 type: string
 *                 format: date
 *                 example: "2024-10-10"
 *                 description: Date of joining (YYYY-MM-DD).
 *               regid:
 *                 type: integer
 *                 example: 3806
 *                 description: Registration ID of the employee.
 *     responses:
 *       200:
 *         description: Employee details updated successfully.
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
 * /portal/emp/deleteEmployee:
 *   post:
 *     summary: Delete Employee
 *     description: Deletes an employee from the system using their registration ID.
 *     tags:
 *       - Employee
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
 *                 example: 3741
 *                 description: Registration ID of the employee to be deleted.
 *     responses:
 *       200:
 *         description: Employee deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ArraySuccessResponse'
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
/**
 * @swagger
 * /portal/emp/createRegBankDetails:
 *   post:
 *     summary: Create Employee Bank Details
 *     description: Adds bank details for an employee.
 *     tags:
 *       - RegBankDetails
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
 *                 example: 3806
 *                 description: Registration ID of the employee.
 *               superid:
 *                 type: integer
 *                 example: 10000
 *                 description: Supervisor ID.
 *               accountNo:
 *                 type: string
 *                 example: "4522343645"
 *                 description: Bank account number.
 *               accountholdersname:
 *                 type: string
 *                 example: "Chaitanya.k"
 *                 description: Name of the account holder.
 *               bankName:
 *                 type: string
 *                 example: "HDFC"
 *                 description: Bank name.
 *               bankbranch:
 *                 type: string
 *                 example: "HYD"
 *                 description: Bank branch.
 *               ifsccode:
 *                 type: string
 *                 example: "HDFC215235"
 *                 description: IFSC code of the bank.
 *               createdby:
 *                 type: integer
 *                 example: 7
 *                 description: ID of the user who created this record.
 *     responses:
 *       200:
 *         description: Bank details added successfully.
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
 * /portal/emp/updateRegBankDetails:
 *   post:
 *     summary: Update Employee Bank Details
 *     description: Updates bank details for an employeeF.
 *     tags:
 *       - RegBankDetails
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
 *                 example: 3806
 *                 description: Registration ID of the employee.
 *               superid:
 *                 type: integer
 *                 example: 10000
 *                 description: Supervisor ID.
 *               accountNo:
 *                 type: string
 *                 example: "123456789012"
 *                 description: Bank account number.
 *               accountholdersname:
 *                 type: string
 *                 example: "Sree Pavani CH"
 *                 description: Name of the account holder.
 *               bankName:
 *                 type: string
 *                 example: "SBI"
 *                 description: Bank name.
 *               bankbranch:
 *                 type: string
 *                 example: "Vidya Nagar"
 *                 description: Bank branch.
 *               ifsccode:
 *                 type: string
 *                 example: "SBIV0002222"
 *                 description: IFSC code of the bank.
 *               createdby:
 *                 type: integer
 *                 example: 7
 *                 description: ID of the user who updated this record.
 *     responses:
 *       200:
 *         description: Bank details updated successfully.
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
 * /portal/emp/getRegBankDetails:
 *   get:
 *     summary: Get Employee Bank Details
 *     description: Fetches the bank details of an employee using the registration ID.
 *     tags:
 *       - RegBankDetails
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: regid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 216
 *         description: Registration ID of the employee whose bank details are to be retrieved.
 *     responses:
 *       200:
 *         description: Bank details Retrieved successfully.
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
 * /portal/emp/createRegProofs:
 *   post:
 *     summary: Create Employee Proof Records
 *     description: Adds proof documents for a registered employee.
 *     tags:
 *       - RegProofs
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
 *               regid:
 *                 type: integer
 *                 example: 3806
 *               pan:
 *                 type: string
 *                 example: "P7232C0D"
 *               uan:
 *                 type: string
 *                 example: "837262"
 *               adhaar:
 *                 type: string
 *                 example: "665598399333"
 *               esi:
 *                 type: string
 *                 example: "2002"
 *               pf:
 *                 type: string
 *                 example: "098765PF"
 *               epfstart:
 *                 type: string
 *                 format: date
 *                 example: "2024-01-01"
 *               voterid:
 *                 type: string
 *                 example: "Vo1673253ID"
 *               createdby:
 *                 type: integer
 *                 example: 7
 *     responses:
 *       200:
 *         description: RegProof created successfully.
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
 * /portal/emp/updateRegProofs:
 *   post:
 *     summary: Update Employee Proof Records
 *     description: Updates proof documents for a registered employee.
 *     tags:
 *       - RegProofs
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
 *               regid:
 *                 type: integer
 *                 example: 3806
 *               pan:
 *                 type: string
 *                 example: "TESTN123C34"
 *               uan:
 *                 type: string
 *                 example: "886582325688734"
 *               adhaar:
 *                 type: string
 *                 example: "4654641232454676"
 *               esi:
 *                 type: string
 *                 example: "1001E32435"
 *               pf:
 *                 type: string
 *                 example: "0124663469"
 *               epfstart:
 *                 type: string
 *                 format: date
 *                 example: "2024-01-01"
 *               voterid:
 *                 type: string
 *                 example: "123684G46"
 *               createdby:
 *                 type: integer
 *                 example: 7
 *     responses:
 *       200:
 *         description: RegProof updated successfully.
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
 * /portal/emp/getRegProofs:
 *   get:
 *     summary: Get Employee Proof Records
 *     description: Fetches proof documents for a registered employee.
 *     tags:
 *       - RegProofs
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: regid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 3806
 *         description: Registration ID of the employee whose proof details need to be retrieved.
 *     responses:
 *       200:
 *         description: Employee Proof Fetched successfully.
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
 * /portal/emp/createRegDetails:
 *   post:
 *     summary: Create Employee Registration Details
 *     description: Adds registration details for an employee.
 *     tags:
 *       - RegDetails
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
 *               regid:
 *                 type: integer
 *                 example: 3775
 *               emailid:
 *                 type: string
 *                 example: "test@example.com"
 *               emergencycontactno1:
 *                 type: string
 *                 example: "9876543210"
 *               emergencycontactno2:
 *                 type: string
 *                 example: "9876543211"
 *               currentaddress:
 *                 type: string
 *                 example: "123, Street Name, City, State, ZIP"
 *               permanentaddress:
 *                 type: string
 *                 example: "456, Another Street, City, State, ZIP"
 *     responses:
 *       200:
 *         description:  Registration Details created successfully.
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
 * /portal/emp/updateRegDetails:
 *   post:
 *     summary: Update Employee Registration Details
 *     description: Updates the registration details for an existing employee.
 *     tags:
 *       - RegDetails
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
 *                 example: 3775
 *               emailid:
 *                 type: string
 *                 example: "sree@perennialcode.com"
 *               emergencycontactno1:
 *                 type: string
 *                 example: "0011223344"
 *               emergencycontactno2:
 *                 type: string
 *                 example: "4433221100"
 *               currentaddress:
 *                 type: string
 *                 example: "Hyderabad"
 *               permanentaddress:
 *                 type: string
 *                 example: "Vidya Nagar"
 *     responses:
 *       200:
 *         description:  Registration Details updated successfully.
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
 * /portal/emp/getRegDetails:
 *   get:
 *     summary: Get Employee Registration Details
 *     description: Retrieves the registration details for a given employee based on regid.
 *     tags:
 *       - RegDetails
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: regid
 *         required: true
 *         schema:
 *           type: integer
 *           example: 180
 *         description: The registration ID of the employee.
 *     responses:
 *       200:
 *         description:  Registration Details Retrieved successfully.
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
 * /portal/emp/createRegFamily:
 *   post:
 *     summary: Create a family member record for an employee
 *     description: Adds a family member to an employee's profile by providing details such as name, relation, and date of birth.
 *     tags:
 *       - RegFamily
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               SuperId:
 *                 type: integer
 *                 example: 10000
 *                 description: Supervisor ID
 *               RegId:
 *                 type: integer
 *                 example: 3775
 *                 description: Employee Registration ID
 *               Name:
 *                 type: string
 *                 example: "NVN"
 *                 description: Name of the family member
 *               Relation:
 *                 type: string
 *                 example: "Brother"
 *                 description: Relationship with the employee
 *               DateOfBirth:
 *                 type: string
 *                 format: date
 *                 example: "2024-01-01"
 *                 description: Date of birth of the family member
 *               Age:
 *                 type: integer
 *                 example: 21
 *                 description: Age of the family member
 *               CreatedBy:
 *                 type: integer
 *                 example: 1
 *                 description: User ID of the person creating the record
 *     responses:
 *       201:
 *         description: Family member created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ArraySuccessResponse'
 *       400:
 *         description: Invalid request parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized access
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
/**
 * @swagger
 * /portal/emp/updateRegFamily:
 *   post:
 *     summary: Update a family member record for an employee
 *     description: Updates an existing family member's details in an employee's profile.
 *     tags:
 *       - RegFamily
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
 *                 example: 3775
 *                 description: Employee Registration ID
 *               Name:
 *                 type: string
 *                 example: "NVN"
 *                 description: Name of the family member
 *               Relation:
 *                 type: string
 *                 example: "Brother"
 *                 description: Relationship with the employee
 *               DateOfBirth:
 *                 type: string
 *                 format: date
 *                 example: "2024-01-01"
 *                 description: Date of birth of the family member
 *               Age:
 *                 type: integer
 *                 example: 21
 *                 description: Age of the family member
 *               UpdatedBy:
 *                 type: integer
 *                 example: 1
 *                 description: User ID of the person updating the record
 *     responses:
 *       200:
 *         description: Family member updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ArraySuccessResponse'
 *       400:
 *         description: Invalid request parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized access
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
/**
 * @swagger
 * /portal/emp/getRegFamily:
 *   get:
 *     summary: Retrieve family details of an employee
 *     description: Fetches the family member details associated with the given employee registration ID.
 *     tags:
 *       - RegFamily
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: regid
 *         schema:
 *           type: integer
 *           example: 3775
 *         required: true
 *         description: Employee Registration ID
 *     responses:
 *       200:
 *         description: Family member details Retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ArraySuccessResponse'
 *       400:
 *         description: Invalid request parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized access
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
