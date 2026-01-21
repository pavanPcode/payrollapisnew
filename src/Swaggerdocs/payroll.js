/**
 * @swagger
 * /payroll/payroll/getsalaryreport:
 *   get:
 *     summary: Get Salary Report
 *     description: Fetches salary report for employees based on branch, employee, and pay period filters.
 *     tags:
 *       - Payroll
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: SuperId
 *         required: true
 *         schema:
 *           type: integer
 *           default: 10000
 *         description: SuperId ID filter. 
 *       - in: query
 *         name: DeptId
 *         required: false
 *         schema:
 *           type: integer
 *           default: 0
 *         description: DeptId ID filter. Use 0 to include all Dept.
 *       - in: query
 *         name: BranchId
 *         required: false
 *         schema:
 *           type: integer
 *           default: 0
 *         description: Branch ID filter. Use 0 to include all branches.
 *       - in: query
 *         name: EmployeeId
 *         required: false
 *         schema:
 *           type: integer
 *           default: 0
 *         description: Employee ID filter. Use 0 to include all employees.
 *       - in: query
 *         name: PayPeriodId
 *         required: false
 *         schema:
 *           type: integer
 *           default: 0
 *         description: Pay Period ID filter. Use 0 to include all periods.
 *     responses:
 *       200:
 *         description: Salary report retrieved successfully.
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
 * /payroll/payroll/getemployees:
 *   get:
 *     summary: Get Employees under Supervisor
 *     description: Fetches a list of employees reporting to a supervisor ID
 *     tags:
 *       - Payroll
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
 *       - in: query
 *         name: BranchId
 *         required: false
 *         schema:
 *           type: integer
 *         example: 2
 *         description: Branch ID (0 or not provided fetches all branches)
 *       - in: query
 *         name: DeptId
 *         required: false
 *         schema:
 *           type: integer
 *         example: 1
 *         description: Department ID (0 or not provided fetches all departments)
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
 * /payroll/payroll/getRegExpenses:
 *   get:
 *     summary: Get Employee Regular Expenses
 *     description: Fetches expense details for employees based on branch, employee, and pay period filters.
 *     tags:
 *       - Payroll
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: SuperId
 *         required: true
 *         schema:
 *           type: integer
 *           default: 10000
 *         description: SuperId.
 *     responses:
 *       200:
 *         description: Employee expenses retrieved successfully.
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
 * /payroll/payroll/getSalaryList:
 *   get:
 *     summary: Get Salary List
 *     description: Fetches detailed salary list for employees based on branch, department, and pay period filters.
 *     tags:
 *       - Payroll
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: SuperId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 10051
 *         description: Unique Super ID of the organization
 *       - in: query
 *         name: EmployeeId
 *         required: false
 *         schema:
 *           type: integer
 *         example: 3699
 *         description: Employee ID (0 or not provided fetches all employees)
 *       - in: query
 *         name: BranchId
 *         required: false
 *         schema:
 *           type: integer
 *           default: 0
 *         description: Branch ID filter. Use 0 to include all branches.
 *       - in: query
 *         name: DeptId
 *         required: false
 *         schema:
 *           type: integer
 *           default: 0
 *         description: Department ID filter. Use 0 to include all departments.
 *       - in: query
 *         name: PayPeriodId
 *         required: false
 *         schema:
 *           type: integer
 *           default: 0
 *         description: Pay Period ID filter. Use 0 to include all periods.
 *     responses:
 *       200:
 *         description: Salary breakup retrieved successfully.
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




// /**
//  * @swagger
//  * /payroll/payroll/getdepartmentwisesalariescount:
//  *   get:
//  *     summary: Get Department Wise Salaries Count
//  *     description: Fetches payroll summary counts grouped by department, such as number of employees and total salary per department.
//  *     tags:
//  *       - Payroll
//  *     security:
//  *       - BearerAuth: []
//  *     parameters:
//  *       - in: query
//  *         name: BranchId
//  *         required: false
//  *         schema:
//  *           type: integer
//  *           default: 0
//  *         description: Branch ID filter. Use 0 to include all branches.
//  *       - in: query
//  *         name: PayPeriodId
//  *         required: false
//  *         schema:
//  *           type: integer
//  *           default: 0
//  *         description: Pay Period ID filter. Use 0 to include all pay periods.
//  *     responses:
//  *       200:
//  *         description: Department-wise salary counts retrieved successfully.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/ArraySuccessResponse'
//  *       400:
//  *         description: Missing or invalid parameters.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/ErrorResponse'
//  *       401:
//  *         description: Unauthorized (Missing or invalid token).
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/ErrorResponse'
//  */


// /**
//  * @swagger
//  * /payroll/payroll/getdpayrolloverviewcount:
//  *   get:
//  *     summary: Get Payroll Overview Counts
//  *     description: Fetches payroll overview counts such as total employees, processed salaries, pending approvals, etc., for dashboard display.
//  *     tags:
//  *       - Payroll
//  *     security:
//  *       - BearerAuth: []
//  *     responses:
//  *       200:
//  *         description: Payroll overview counts retrieved successfully.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/ArraySuccessResponse'
//  *       400:
//  *         description: Missing or invalid parameters.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/ErrorResponse'
//  *       401:
//  *         description: Unauthorized (Missing or invalid token).
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/ErrorResponse'
//  */




/**
 * @swagger
 * /payroll/payroll/deleteAdvance:
 *   post:
 *     summary: Deactivate (Delete) an Advance Payment
 *     description: Marks an advance payment as inactive (soft delete) in the system.
 *     tags:
 *       - Payroll
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               AdvanceId:
 *                 type: integer
 *                 example: 4
 *                 description: The ID of the advance payment to deactivate.
 *               UpdatedBy:
 *                 type: integer
 *                 example: 12
 *                 description: User ID performing the deletion.
 *     responses:
 *       200:
 *         description: Advance payment deactivated successfully.
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
 * /payroll/payroll/getPayRollProcessedStatus:
 *   get:
 *     summary: Get Payroll Processed Status
 *     description: Returns whether payroll is processed or not for a given branch and pay period.
 *     tags:
 *       - Payroll
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: BranchId
 *         required: true
 *         schema:
 *           type: integer
 *           example: 2
 *         description: Branch ID
 *       - in: query
 *         name: PayPeriodId
 *         required: true
 *         schema:
 *           type: integer
 *           example: 24
 *         description: Pay Period ID
 *     responses:
 *       200:
 *         description: Payroll status retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 PayrollStatus:
 *                   type: string
 *                   example: Processed
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
 * /payroll/payroll/getPayPeriods:
 *   get:
 *     summary: Get Pay Periods
 *     description: Retrieves pay periods based on the provided superid.
 *     tags:
 *       - Payroll
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: SuperId
 *         required: true
 *         schema:
 *           type: string
 *         example: "10000"
 *         description: Unique Super ID for fetching branch details
 *     responses:
 *       200:
 *         description: Branch details retrieved successfully
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
 *         description: Unauthorized (Missing or invalid token)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */


/**
 * @swagger
 * /payroll/payroll/getctcreport:
 *   get:
 *     summary: Get CTC Report
 *     description: Retrieves CTC report details based on SuperId and optionally EmployeeId. If EmployeeId is 0 or not provided, data for all employees under the SuperId will be returned.
 *     tags:
 *       - Payroll
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: SuperId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 10051
 *         description: Unique Super ID of the organization
 *       - in: query
 *         name: EmployeeId
 *         required: false
 *         schema:
 *           type: integer
 *         example: 3699
 *         description: Employee ID (0 or not provided fetches all employees)
 *     responses:
 *       200:
 *         description: CTC report retrieved successfully
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
 *         description: Unauthorized (Missing or invalid token)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
/**
 * @swagger
 * /payroll/payroll/getSalaryAdvances:
 *   get:
 *     summary: Get Salary Advance Details
 *     description: Retrieves salary advance details based on SuperId and optional filters like EmployeeId, BranchId, and DeptId. Passing 0 or omitting optional parameters will return all applicable records.
 *     tags:
 *       - Payroll
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: SuperId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 10051
 *         description: Unique Super ID of the organization
 *       - in: query
 *         name: EmployeeId
 *         required: false
 *         schema:
 *           type: integer
 *         example: 3699
 *         description: Employee ID (0 or not provided fetches all employees)
 *       - in: query
 *         name: BranchId
 *         required: false
 *         schema:
 *           type: integer
 *         example: 2
 *         description: Branch ID (0 or not provided fetches all branches)
 *       - in: query
 *         name: DeptId
 *         required: false
 *         schema:
 *           type: integer
 *         example: 1
 *         description: Department ID (0 or not provided fetches all departments)
 *     responses:
 *       200:
 *         description: Salary advance details retrieved successfully
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
 *         description: Unauthorized (Missing or invalid token)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
/**
 * @swagger
 * /payroll/DashBoard/getDepartmentWiseSalaries:
 *   get:
 *     summary: Get Department-wise Salaries
 *     description: Fetches department-wise net payable salary for a given SuperId, Month, and Year.
 *     tags:
 *       - Payroll-DashBoard
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: SuperId
 *         required: true
 *         schema:
 *           type: integer
 *           example: 10051
 *         description: SuperId of the organization.
 *       - in: query
 *         name: Month
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 12
 *           example: 4
 *         description: Month for which salary data is required (1 = January, 12 = December).
 *       - in: query
 *         name: Year
 *         required: true
 *         schema:
 *           type: integer
 *           example: 2022
 *         description: Year for which salary data is required.
 *     responses:
 *       200:
 *         description: Department-wise salary data retrieved successfully.
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
 *                   example: Department-wise salaries fetched successfully.
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       DepartmentId:
 *                         type: integer
 *                         example: 1
 *                       DepartmentName:
 *                         type: string
 *                         example: ACCOUNTS
 *                       DeptMonthlySalary:
 *                         type: number
 *                         example: 85000
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
 * /payroll/DashBoard/getPayrollOverviewCount:
 *   get:
 *     summary: Get Payroll Overview Count
 *     description: Fetches payroll overview totals (salary components summary) for a given SuperId, Month, and Year.
 *     tags:
 *       - Payroll-DashBoard
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: SuperId
 *         required: true
 *         schema:
 *           type: integer
 *           example: 10051
 *         description: SuperId of the organization.
 *       - in: query
 *         name: Month
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 12
 *           example: 4
 *         description: Month for which payroll overview is required.
 *       - in: query
 *         name: Year
 *         required: true
 *         schema:
 *           type: integer
 *           example: 2022
 *         description: Year for which payroll overview is required.
 *     responses:
 *       200:
 *         description: Payroll overview data retrieved successfully.
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
 *                   example: Payroll overview fetched successfully.
 *                 data:
 *                   type: object
 *                   properties:
 *                     Basic:
 *                       type: number
 *                       example: 3000
 *                     LossOfPay:
 *                       type: number
 *                       example: 0
 *                     Pf:
 *                       type: number
 *                       example: 360
 *                     Esi:
 *                       type: number
 *                       example: 45
 *                     ProffTax:
 *                       type: number
 *                       example: 200
 *                     Tds:
 *                       type: number
 *                       example: 500
 *                     Incentives:
 *                       type: number
 *                       example: 1000
 *                     AttendanceBonus:
 *                       type: number
 *                       example: 500
 *                     Bonus:
 *                       type: number
 *                       example: 0
 *                     SpecialAllowance:
 *                       type: number
 *                       example: 1800
 *                     Hra:
 *                       type: number
 *                       example: 1200
 *                     ConveyanceAllowance:
 *                       type: number
 *                       example: 800
 *                     OtherAllowance:
 *                       type: number
 *                       example: 0
 *                     MedicalAllowance:
 *                       type: number
 *                       example: 0
 *                     GrossPay:
 *                       type: number
 *                       example: 3000
 *                     Earnings:
 *                       type: number
 *                       example: 6000
 *                     Deductions:
 *                       type: number
 *                       example: 405
 *                     NetPayble:
 *                       type: number
 *                       example: 5595
 *                     GrossSalary:
 *                       type: number
 *                       example: 6000
 *                     ExpensesAllowance:
 *                       type: number
 *                       example: 0
 *                     Advance:
 *                       type: number
 *                       example: 0
 *                     OT:
 *                       type: number
 *                       example: 0
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
 * /payroll/DashBoard/getpayrollcounts:
 *   get:
 *     summary: Get Payroll Counts
 *     description: Fetches overall payroll counts, such as number of employees processed, pending approvals, or other summary metrics.
 *     tags:
 *       - Payroll-DashBoard
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: SuperId
 *         required: true
 *         schema:
 *           type: integer
 *           default: 10000
 *         description: SuperId ID filter. 
 *     responses:
 *       200:
 *         description: Payroll counts retrieved successfully.
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



// /**
//  * @swagger
//  * /payroll/DashBoard/getdepartmentwisesalariescount:
//  *   get:
//  *     summary: Get Department Wise Salaries Count
//  *     description: Fetches payroll summary counts grouped by department, such as number of employees and total salary per department.
//  *     tags:
//  *       - Payroll
//  *     security:
//  *       - BearerAuth: []
//  *     parameters:
//  *       - in: query
//  *         name: BranchId
//  *         required: false
//  *         schema:
//  *           type: integer
//  *           default: 0
//  *         description: Branch ID filter. Use 0 to include all branches.
//  *       - in: query
//  *         name: PayPeriodId
//  *         required: false
//  *         schema:
//  *           type: integer
//  *           default: 0
//  *         description: Pay Period ID filter. Use 0 to include all pay periods.
//  *     responses:
//  *       200:
//  *         description: Department-wise salary counts retrieved successfully.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/ArraySuccessResponse'
//  *       400:
//  *         description: Missing or invalid parameters.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/ErrorResponse'
//  *       401:
//  *         description: Unauthorized (Missing or invalid token).
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/ErrorResponse'
//  */

/**
 * @swagger
 * /payroll/Process/getPayPeriod:
 *   get:
 *     summary: Get Pay Period
 *     description: Fetches pay period details for the given SuperId.
 *     tags:
 *       - Payroll-Process
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: SuperId
 *         required: true
 *         schema:
 *           type: integer
 *           example: 10000
 *         description: SuperId of the organization.
 *       - in: query
 *         name: BranchId
 *         required: true
 *         schema:
 *           type: integer
 *           example: 4
 *         description: BranchId of the organization.
 *     responses:
 *       200:
 *         description: Pay period data retrieved successfully.
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
 *                   example: Pay period fetched successfully.
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       Id:
 *                         type: integer
 *                         example: 1
 *                       StartDate:
 *                         type: string
 *                         format: date
 *                         example: 2024-04-01
 *                       EndDate:
 *                         type: string
 *                         format: date
 *                         example: 2024-04-30
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
 * /payroll/Process/PayrollImportedAttendance:
 *   get:
 *     tags:
 *       - Payroll-Process
 *     summary: Get or process imported attendance
 *     description: >
 *       - Set IsInsertInToAttendance = 0 to only get attendance data  
 *       - Set IsInsertInToAttendance = 1 to insert attendance data into the Attendance table
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: SuperId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 10051
 *       - in: query
 *         name: PayPeriodId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 27
 *       - in: query
 *         name: IsInsertInToAttendance
 *         required: true
 *         schema:
 *           type: integer
 *           enum: [0, 1]
 *         description: |
 *           0 → Only get attendance data  
 *           1 → Insert attendance data
 *         example: 0
 *       - in: query
 *         name: BranchId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 4
 *     responses:
 *       200:
 *         description: Attendance data processed successfully
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
 * /payroll/Process/PayrollProcessBranchWise:
 *   get:
 *     tags:
 *       - Payroll-Process
 *     summary: Process payroll branch-wise for a pay period
 *     description: Calls PRSP_PayrollProcessBranchWise stored procedure to process payroll for a specific branch and pay period.
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: ProcessingUser
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID who is processing the payroll
 *       - in: query
 *         name: PayperiodId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Pay period ID
 *       - in: query
 *         name: BranchId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Branch ID
 *     responses:
 *       200:
 *         description: Payroll processed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Payroll processed successfully
 *       400:
 *         description: Missing required parameters
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: ProcessingUser and PayPeriodId and BranchId are required
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /payroll/Process/GetEmployeePayReport:
 *   get:
 *     tags:
 *       - Payroll-Process
 *     summary: Get employee pay report
 *     description: Fetches employee pay report for a given pay period and branch.
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: PayPeriodId
 *         required: true
 *         schema:
 *           type: integer
 *           example: 35
 *         description: Pay period ID
 *       - in: query
 *         name: BranchId
 *         required: true
 *         schema:
 *           type: integer
 *           example: 4
 *         description: Branch ID
 *     responses:
 *       200:
 *         description: Employee pay report retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                 message:
 *                   type: string
 *                   example: Employee pay report fetched successfully
 *       400:
 *         description: Missing required parameters
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: PayPeriodId and BranchId are required
 *       401:
 *         description: Unauthorized (Missing or invalid token)
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /payroll/AdvancePayments/AddAdvancePayments:
 *   post:
 *     tags:
 *       - Payroll-AdvancePayments
 *     summary: Add employee salary advance payment
 *     description: Adds a new salary advance payment for an employee.
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - SuperId
 *               - RegId
 *               - StartDate
 *               - AdvanceAmount
 *               - Emi
 *               - Tenure
 *               - CreatedBy
 *             properties:
 *               SuperId:
 *                 type: integer
 *                 example: 10051
 *               RegId:
 *                 type: integer
 *                 example: 101
 *               StartDate:
 *                 type: string
 *                 format: date
 *                 example: 2024-04-01
 *               AdvanceAmount:
 *                 type: number
 *                 example: 20000
 *               Emi:
 *                 type: number
 *                 example: 2000
 *               Tenure:
 *                 type: integer
 *                 example: 10
 *               CreatedBy:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Advance payment added successfully
 *       400:
 *         description: Invalid or missing parameters
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /payroll/AdvancePayments/deleteAdvancePayments:
 *   post:
 *     tags:
 *       - Payroll-AdvancePayments
 *     summary: Delete (Deactivate) employee salary advance payment
 *     description: Soft deletes an advance payment by setting IsActive to 0.
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - AdvancePaymentId
 *               - UpdatedBy
 *             properties:
 *               AdvancePaymentId:
 *                 type: integer
 *                 example: 10
 *                 description: Advance payment ID
 *               UpdatedBy:
 *                 type: integer
 *                 example: 1
 *                 description: User who is deleting the record
 *     responses:
 *       200:
 *         description: Advance payment deleted successfully
 *       400:
 *         description: Invalid or missing parameters
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /payroll/AdvancePayments/getSalaryAdvances:
 *   get:
 *     summary: Get Salary Advance Details
 *     description: Retrieves salary advance details based on SuperId and optional filters like EmployeeId, BranchId, and DeptId. Passing 0 or omitting optional parameters will return all applicable records.
 *     tags:
 *       - Payroll-AdvancePayments
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: SuperId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 10051
 *         description: Unique Super ID of the organization
 *       - in: query
 *         name: EmployeeId
 *         required: false
 *         schema:
 *           type: integer
 *         example: 3699
 *         description: Employee ID (0 or not provided fetches all employees)
 *       - in: query
 *         name: BranchId
 *         required: false
 *         schema:
 *           type: integer
 *         example: 2
 *         description: Branch ID (0 or not provided fetches all branches)
 *       - in: query
 *         name: DeptId
 *         required: false
 *         schema:
 *           type: integer
 *         example: 1
 *         description: Department ID (0 or not provided fetches all departments)
 *     responses:
 *       200:
 *         description: Salary advance details retrieved successfully
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
 *         description: Unauthorized (Missing or invalid token)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /payroll/EmployeCTC/getctcreport:
 *   get:
 *     summary: Get CTC Report
 *     description: Retrieves CTC report details based on SuperId and optionally EmployeeId. If EmployeeId is 0 or not provided, data for all employees under the SuperId will be returned.
 *     tags:
 *       - Payroll-EmployeCTC
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: SuperId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 10051
 *         description: Unique Super ID of the organization
 *       - in: query
 *         name: EmployeeId
 *         required: false
 *         schema:
 *           type: integer
 *         example: 3699
 *         description: Employee ID (0 or not provided fetches all employees)
 *     responses:
 *       200:
 *         description: CTC report retrieved successfully
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
 *         description: Unauthorized (Missing or invalid token)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
/**
 * @swagger
 * /payroll/RegExpenses/getRegExpenses:
 *   get:
 *     summary: Get Employee Regular Expenses
 *     description: Fetches expense details for employees based on branch, employee, and pay period filters.
 *     tags:
 *       - Payroll-RegExpenses
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: SuperId
 *         required: true
 *         schema:
 *           type: integer
 *           default: 10000
 *         description: SuperId.
 *       - in: query
 *         name: RegId
 *         required: true
 *         schema:
 *           type: integer
 *           default: 27
 *         description: RegId  (0 or not provided fetches all employees).
 *       - in: query
 *         name: BranchId
 *         required: true
 *         schema:
 *           type: integer
 *           default: 27
 *         description: BranchId  (0 or not provided fetches all BranchId).
 *       - in: query
 *         name: PayPeriodId
 *         required: true
 *         schema:
 *           type: integer
 *           default: 27
 *         description: PayPeriodId  (0 or not provided fetches all PayPeriodId).

 *     responses:
 *       200:
 *         description: Employee expenses retrieved successfully.
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
