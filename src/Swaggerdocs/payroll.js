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
 *       - in: query
 *         name: BranchId
 *         required: false
 *         schema:
 *           type: integer
 *         example: 3699
 *         description: BranchId ID (0 or not provided fetches all BranchId)
 *       - in: query
 *         name: DeptId
 *         required: false
 *         schema:
 *           type: integer
 *         example: 3699
 *         description: DeptId ID (0 or not provided fetches all DeptId)
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
 *       - in: query
 *         name: BranchId
 *         required: false
 *         schema:
 *           type: integer
 *         example: 3699
 *         description: BranchId ID (0 or not provided fetches all BranchId)
 *       - in: query
 *         name: DeptId
 *         required: false
 *         schema:
 *           type: integer
 *         example: 3699
 *         description: DeptId ID (0 or not provided fetches all DeptId)

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
/**
 * @swagger
 * /payroll/RegExpenses/addRegExpenses:
 *   post:
 *     summary: Add Regular Expense
 *     description: API to add regular employee expenses with attachment
 *     tags:
 *       - Payroll-RegExpenses
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - SuperId
 *               - EmployeeId
 *               - ExpenseDate
 *               - Notes
 *               - Amount
 *               - CreatedBy
 *               - PaidDate
 *             properties:
 *               SuperId:
 *                 type: integer
 *                 example: 10051
 *               EmployeeId:
 *                 type: integer
 *                 example: 20012
 *               ExpenseDate:
 *                 type: string
 *                 format: date
 *                 example: "2026-01-20"
 *               Notes:
 *                 type: string
 *                 example: Travel expenses
 *               Amount:
 *                 type: number
 *                 format: float
 *                 example: 1500
 *               CreatedBy:
 *                 type: integer
 *                 example: 10051
 *               Attachment:
 *                 type: string
 *                 format: binary
 *                 description: Upload expense bill or receipt
 *               PaidDate:
 *                 type: string
 *                 format: date
 *                 example: 2026-01-23
 *     responses:
 *       200:
 *         description: Expense added successfully
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
 *                   example: Expense added successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /payroll/RegExpenses/ApproveRegExpenses:
 *   post:
 *     summary: Approve Regular Expense
 *     description: Approve and activate a regular expense
 *     tags:
 *       - Payroll-RegExpenses
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - RegExpensesId
 *               - UpdatedBy
 *               - ApprovedAmount
 *             properties:
 *               RegExpensesId:
 *                 type: integer
 *                 description: Expense record ID
 *                 example: 45
 *               ApprovedAmount:
 *                 type: integer
 *                 description: ApprovedAmount
 *                 example: 1000
 *               UpdatedBy:
 *                 type: integer
 *                 description: User who approves the expense
 *                 example: 10051
 *     responses:
 *       200:
 *         description: Expense approved successfully
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
 *                   example: Expense approved successfully
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /payroll/RegExpenses/deleteRegExpenses:
 *   post:
 *     summary: Delete Regular Expense
 *     description: Soft delete a regular expense by updating IsActive status
 *     tags:
 *       - Payroll-RegExpenses
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - RegExpensesId
 *               - UpdatedBy
 *             properties:
 *               RegExpensesId:
 *                 type: integer
 *                 description: Expense ID to be deleted
 *                 example: 45
 *               UpdatedBy:
 *                 type: integer
 *                 description: User who deletes the expense
 *                 example: 10051
 *     responses:
 *       200:
 *         description: Expense deleted successfully
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
 *                   example: Expense deleted successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 *  /payroll/RegExpenses/addVendorExpenses:
 *   post:
 *     summary: Add Vendor Expense
 *     description: Upload vendor expense details along with an attachment file
 *     tags:
 *       - Payroll-Vendor
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - SuperId
 *               - ExpenseTypeId
 *               - ExpenseDate
 *               - VendorName
 *               - Amount
 *               - CreatedBy
 *               - PaidDate
 *             properties:
 *               SuperId:
 *                 type: integer
 *                 example: 10051
 *               ExpenseTypeId:
 *                 type: integer
 *                 example: 3
 *               ExpenseDate:
 *                 type: string
 *                 format: date
 *                 example: 2026-01-23
 *               VendorName:
 *                 type: string
 *                 example: ABC Supplies
 *               VendorCode:
 *                 type: string
 *                 example: VND-001
 *               Mobile:
 *                 type: string
 *                 example: 9876543210
 *               Amount:
 *                 type: number
 *                 format: double
 *                 example: 12500.50
 *               Notes:
 *                 type: string
 *                 example: Office stationery purchase
 *               Attachment:
 *                 type: string
 *                 format: binary
 *               CreatedBy:
 *                 type: integer
 *                 example: 27
 *               PaidDate:
 *                 type: string
 *                 format: date
 *                 example: 2026-01-23
 *     responses:
 *       200:
 *         description: Vendor expense added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Vendor expense added successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /payroll/RegExpenses/getVendorExpenses:
 *   get:
 *     summary: Get Vendor Expenses
 *     description: Fetch all vendor expenses for a given SuperId
 *     tags:
 *       - Payroll-Vendor
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: SuperId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 10051
 *     responses:
 *       200:
 *         description: Vendor expenses fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       Id:
 *                         type: integer
 *                         example: 12
 *                       SuperId:
 *                         type: integer
 *                         example: 10051
 *                       VendorId:
 *                         type: integer
 *                         nullable: true
 *                         example: null
 *                       ExpenseTypeId:
 *                         type: integer
 *                         example: 3
 *                       ExpenseDate:
 *                         type: string
 *                         format: date
 *                         example: 2026-01-23
 *                       VendorName:
 *                         type: string
 *                         example: ABC Supplies
 *                       VendorCode:
 *                         type: string
 *                         example: VND-001
 *                       Mobile:
 *                         type: string
 *                         example: 9876543210
 *                       Amount:
 *                         type: number
 *                         format: double
 *                         example: 12500.50
 *                       FilePath:
 *                         type: string
 *                         example: https://files.example.com/payroll/Vendor/10051/bill1.jpg
 *                       Notes:
 *                         type: string
 *                         example: Office stationery purchase
 *                       IsApproved:
 *                         type: boolean
 *                         example: false
 *                       IsActive:
 *                         type: boolean
 *                         example: true
 *                       CreatedBy:
 *                         type: integer
 *                         example: 101
 *                       CreatedOn:
 *                         type: string
 *                         format: date-time
 *                         example: 2026-01-23T10:30:00
 *                       UpdatedBy:
 *                         type: integer
 *                         nullable: true
 *                         example: null
 *                       UpdatedOn:
 *                         type: string
 *                         format: date-time
 *                         nullable: true
 *                         example: null
 *       400:
 *         description: SuperId is required
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /payroll/RegExpenses/deleteVendorExpenses:
 *   post:
 *     summary: Delete Vendor Expense
 *     description: Soft delete a vendor expense by setting IsActive = 0
 *     tags:
 *       - Payroll-Vendor
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - Id
 *               - UpdatedBy
 *             properties:
 *               Id:
 *                 type: integer
 *                 example: 12
 *               UpdatedBy:
 *                 type: integer
 *                 example: 12
 *     responses:
 *       200:
 *         description: Vendor expense deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Vendor expense deleted successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /payroll/RegExpenses/ApproveVendorExpenses:
 *   post:
 *     summary: Approve Vendor Expense
 *     description: Approve a vendor expense by setting IsApproved = 1
 *     tags:
 *       - Payroll-Vendor
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - Id
 *               - UpdatedBy
 *               - ApprovedAmount
 *             properties:
 *               Id:
 *                 type: integer
 *                 example: 12
 *               UpdatedBy:
 *                 type: integer
 *                 example: 12
 *               ApprovedAmount:
 *                 type: integer
 *                 example: 1000
 *     responses:
 *       200:
 *         description: Vendor expense approved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Vendor expense approved successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /payroll/payroll/getpayslips:
 *   get:
 *     summary: Get Payslips
 *     description: Fetches payslips based on Branch, Department, Employee, and Pay Period filters.
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
 *           default: 4
 *         description: Branch ID filter (0 for all branches).
 *       - in: query
 *         name: DeptId
 *         required: true
 *         schema:
 *           type: integer
 *           default: 3
 *         description: Department ID filter (0 for all departments).
 *       - in: query
 *         name: EmployeeId
 *         required: true
 *         schema:
 *           type: integer
 *           default: 3699
 *         description: Employee ID filter (0 for all employees).
 *       - in: query
 *         name: PayPeriodId
 *         required: true
 *         schema:
 *           type: integer
 *           default: 163
 *         description: Pay Period ID filter (0 for all periods).
 *       - in: query
 *         name: SuperId
 *         required: true
 *         schema:
 *           type: integer
 *           default: 10051
 *         description: Employee ID filter.
 *     responses:
 *       200:
 *         description: Payslips retrieved successfully.
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
 * /payroll/EmployeCTC/GetctcdetailsForEmp:
 *   get:
 *     summary: Get CTC details for an employee
 *     description: Fetches CTC (Cost to Company) details for a specific employee based on RegId. This API is protected and requires a valid authorization token.
 *     tags:
 *       - Payroll-EmployeCTC
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: OrgSalaryId
 *         required: true
 *         schema:
 *           type: integer
 *         description: OrgSalaryId 
 *     responses:
 *       200:
 *         description: Successfully retrieved CTC details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   description: Employee CTC details
 *       401:
 *         description: Unauthorized – Invalid or missing token
 *       400:
 *         description: Bad request – Invalid RegId
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /payroll/EmployeCTC/UpdateEmpCtc:
 *   post:
 *     summary: Update employee CTC
 *     description: >
 *       Updates employee CTC by closing the existing salary (OrgSalary),
 *       creating a new salary record, and inserting salary structure details.
 *       This API is protected and requires a valid authorization token.
 *     tags:
 *       - Payroll-EmployeCTC
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
 *               - MonthlyCTC
 *               - AnnualCTC
 *               - CreatedBy
 *               - EffectiveDate
 *               - OrgSalaryId
 *               - EmpCtc
 *             properties:
 *               SuperId:
 *                 type: integer
 *                 example: 10051
 *               RegId:
 *                 type: integer
 *                 example: 3732
 *               MonthlyCTC:
 *                 type: number
 *                 format: double
 *                 example: 18000.00
 *               AnnualCTC:
 *                 type: number
 *                 format: double
 *                 example: 216000.00
 *               CreatedBy:
 *                 type: integer
 *                 example: 6
 *               EffectiveDate:
 *                 type: string
 *                 format: date
 *                 example: "2026-01-26"
 *               OrgSalaryId:
 *                 type: integer
 *                 description: Existing OrgSalaryId to be closed
 *                 example: 613
 *               EmpCtc:
 *                 type: array
 *                 description: Salary breakup details
 *                 items:
 *                   type: object
 *                   required:
 *                     - SalaryHeadId
 *                     - Amount
 *                   properties:
 *                     SalaryHeadId:
 *                       type: integer
 *                       example: 21
 *                     Amount:
 *                       type: number
 *                       format: double
 *                       example: 9000.00
 *     responses:
 *       200:
 *         description: Employee CTC updated successfully
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
 *                   example: Employee CTC updated successfully
 *       400:
 *         description: Bad request – Invalid input data
 *       401:
 *         description: Unauthorized – Invalid or missing token
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /payroll/EmployeCTC/GetEmpCtcHistory:
 *   get:
 *     summary: Get Employee CTC History
 *     description: >
 *       Fetches employee CTC salary history date-wise based on RegId.
 *       This API returns salary head-wise changes (Old Amount → New Amount)
 *       whenever the CTC is updated. Authorization token is required.
 *     tags:
 *       - Payroll-EmployeCTC
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: RegId
 *         required: true
 *         schema:
 *           type: integer
 *           example: 3732
 *         description: Employee Registration ID
 *     responses:
 *       200:
 *         description: Successfully retrieved employee CTC history
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       OrgSalaryId:
 *                         type: integer
 *                         example: 621
 *                       SalaryHeadId:
 *                         type: integer
 *                         example: 21
 *                       OldAmount:
 *                         type: number
 *                         example: 18000
 *                       NewAmount:
 *                         type: number
 *                         example: 20000
 *                       UpdatedOn:
 *                         type: string
 *                         example: "24-01-2026"
 *       400:
 *         description: Bad request – Invalid RegId
 *       401:
 *         description: Unauthorized – Invalid or missing token
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /payroll/EmployeCTC/addEmpCtc:
 *   post:
 *     summary: Add Employee CTC
 *     description: >
 *       Inserts a new CTC record for an employee into the OrgSalaries table.
 *       This API is protected and requires a valid authorization token.
 *     tags:
 *       - Payroll-EmployeCTC
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
 *               - MonthlyCTC
 *               - SalaryGroupMasterId
 *               - CreatedBy
 *               - EffectiveDate
 *             properties:
 *               SuperId:
 *                 type: integer
 *                 example: 10051
 *                 description: Employee SuperId
 *               RegId:
 *                 type: integer
 *                 example: 3732
 *                 description: Employee Registration ID
 *               MonthlyCTC:
 *                 type: number
 *                 format: double
 *                 example: 20000.00
 *                 description: Monthly CTC amount
 *               SalaryGroupMasterId:
 *                 type: integer
 *                 example: 1
 *                 description: SalaryGroupMasterId .
 *               CreatedBy:
 *                 type: integer
 *                 example: 6
 *                 description: User ID creating this CTC record
 *               EffectiveDate:
 *                 type: string
 *                 format: date
 *                 example: "2026-01-26"
 *                 description: Effective date of this CTC record
 *     responses:
 *       200:
 *         description: Employee CTC added successfully
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
 *                   example: Employee CTC added successfully
 *       400:
 *         description: Bad request – Invalid input data
 *       401:
 *         description: Unauthorized – Invalid or missing token
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 *  /payroll/EmployeCTC/getSalaryGroupMaster:
 *   get:
 *     summary: Get Salary Group Master
 *     description: >
 *       Fetches the list of salary group master records based on SuperId.
 *       This API is protected and requires a valid authorization token.
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
 *           example: 10051
 *         description: SuperId of the organization
 *     responses:
 *       200:
 *         description: Salary group master data fetched successfully
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
 *                   example: Success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       Id:
 *                         type: integer
 *                         example: 1
 *                       SuperId:
 *                         type: integer
 *                         example: 10051
 *                       SalaryGroupName:
 *                         type: string
 *                         example: Monthly Staff
 *                       IsActive:
 *                         type: boolean
 *                         example: true
 *       401:
 *         description: Unauthorized – Invalid or missing token
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /payroll/EmployeCTC/getNewEmpListForctcadd:
 *   get:
 *     summary: Get New Employee List for CTC Add
 *     description: >
 *       Fetches a list of employees who do not have CTC/salary records yet.
 *       This API supports optional branch and department filters.
 *       This API is protected and requires a valid authorization token.
 *     tags:
 *       - Payroll-EmployeCTC
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: superid
 *         required: true
 *         schema:
 *           type: integer
 *           example: 10051
 *         description: Supervisor ID to fetch employees
 *       - in: query
 *         name: BranchId
 *         required: false
 *         schema:
 *           type: integer
 *           example: 0
 *         description: Branch ID (0 or not provided fetches all branches)
 *       - in: query
 *         name: DeptId
 *         required: false
 *         schema:
 *           type: integer
 *           example: 0
 *         description: Department ID (0 or not provided fetches all departments)
 *     responses:
 *       200:
 *         description: New employee list fetched successfully
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
 *                   example: Success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       RegId:
 *                         type: integer
 *                         example: 3732
 *                       UserName:
 *                         type: string
 *                         example: John Doe
 *                       Badge:
 *                         type: string
 *                         example: EMP102
 *                       BranchId:
 *                         type: integer
 *                         example: 2
 *                       DeptId:
 *                         type: integer
 *                         example: 1
 *       400:
 *         description: Missing or invalid parameter
 *       401:
 *         description: Unauthorized – Invalid or missing token
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /payroll/Reports/getpayrollReports:
 *   get:
 *     summary: Get Payroll Reports
 *     description: Retrieves payroll reports based on supervisor, report type, pay period, department, branch, and employee filters.
 *     tags:
 *       - Payroll-Reports
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: superid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 10228
 *         description: Supervisor ID
 *
 *       - in: query
 *         name: reportiid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *         description: Payroll Report ID
 *
 *       - in: query
 *         name: PayperiodId
 *         required: false
 *         schema:
 *           type: integer
 *         description: Pay Period ID
 *
 *       - in: query
 *         name: RegId
 *         required: false
 *         schema:
 *           type: integer
 *         description: Employee Registration ID
 *
 *       - in: query
 *         name: DeptId
 *         required: false
 *         schema:
 *           type: integer
 *         description: Department ID
 *
 *       - in: query
 *         name: BranchId
 *         required: false
 *         schema:
 *           type: integer
 *         description: Branch ID
 *
 *     responses:
 *       200:
 *         description: Payroll report data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ArraySuccessResponse'
 *
 *       400:
 *         description: Missing or invalid parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *
 *       401:
 *         description: Unauthorized (Invalid or missing token)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
/**
 * @swagger
 * /payroll/Reports/getAdvancePaymentsReports:
 *   get:
 *     summary: Get Advance Payments Reports
 *     description: Retrieves employee advance payment reports based on supervisor, employee, and department filters.
 *     tags:
 *       - Payroll-Reports
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: SuperId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 10051
 *         description: Supervisor ID
 *
 *       - in: query
 *         name: EmployeeId
 *         required: false
 *         schema:
 *           type: integer
 *         example: 0
 *         description: Employee (Registration) ID or 0 for all
 *
 *       - in: query
 *         name: DeptId
 *         required: false
 *         schema:
 *           type: integer
 *         example: 0
 *         description: Department ID or 0 for all
 *
 *     responses:
 *       200:
 *         description: Advance payments report retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ArraySuccessResponse'
 *
 *       400:
 *         description: Missing or invalid parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *
 *       401:
 *         description: Unauthorized (Invalid or missing token)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
/**
 * @swagger
 * /payroll/AdvancePayments/getAdvancePaymentsHistory:
 *   get:
 *     summary: Get Advance Payment History
 *     description: Retrieves the history/details of a specific advance payment using the advance payment ID.
 *     tags:
 *       - Payroll-AdvancePayments
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: AdvancePaymentId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 12
 *         description: Advance Payment ID
 *
 *     responses:
 *       200:
 *         description: Advance payment history retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ArraySuccessResponse'
 *
 *       400:
 *         description: Missing or invalid parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *
 *       401:
 *         description: Unauthorized (Invalid or missing token)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
/**
 * @swagger
 * /payroll/payslips/getpayslips:
 *   get:
 *     summary: Get Payslips
 *     description: Retrieves employee payslips based on supervisor, pay period, employee, branch, and department filters.
 *     tags:
 *       - payroll-Payslips
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: SuperId
 *         required: true
 *         schema:
 *           type: integer
 *         example: 10228
 *         description: Supervisor ID
 *
 *       - in: query
 *         name: PayperiodId
 *         required: false
 *         schema:
 *           type: integer
 *         example: 12
 *         description: Pay Period ID
 *
 *       - in: query
 *         name: RegId
 *         required: false
 *         schema:
 *           type: integer
 *         example: 3268
 *         description: Employee Registration ID
 *
 *       - in: query
 *         name: BranchId
 *         required: false
 *         schema:
 *           type: integer
 *         example: 2
 *         description: Branch ID
 *
 *       - in: query
 *         name: DeptId
 *         required: false
 *         schema:
 *           type: integer
 *         example: 3
 *         description: Department ID
 *
 *     responses:
 *       200:
 *         description: Payslips retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ArraySuccessResponse'
 *
 *       400:
 *         description: Missing or invalid parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *
 *       401:
 *         description: Unauthorized (Invalid or missing token)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
/**
 * @swagger
 * /payroll/payslips/getlast3payslips:
 *   get:
 *     summary: Get last 3 payslips for an employee
 *     description: |
 *       Fetches the latest 3 pay periods for a given employee (RegId)
 *       and returns consolidated payslip data with Earnings and Deductions
 *       grouped based on SalaryType.
 *     tags:
 *       - payroll-Payslips
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: SuperId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Organization Super ID
 *       - in: query
 *         name: RegId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Employee Registration ID
 *     responses:
 *       200:
 *         description: Successfully retrieved last 3 payslips
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 ResultData:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       RegId:
 *                         type: integer
 *                         example: 46
 *                       CardId:
 *                         type: string
 *                         example: "1002"
 *                       UserName:
 *                         type: string
 *                         example: "ADIKE PRAKASH"
 *                       Branch:
 *                         type: string
 *                         example: "Sri Sai Transporters"
 *                       Department:
 *                         type: string
 *                         example: "ADMINSTRATION"
 *                       Designation:
 *                         type: string
 *                         example: "MANAGING DIRECTOR"
 *                       PayperiodId:
 *                         type: integer
 *                         example: 27
 *                       PayPeriodName:
 *                         type: string
 *                         example: "February-2020"
 *                       GrossPay:
 *                         type: number
 *                         example: 40000
 *                       NetSalary:
 *                         type: number
 *                         example: 37600
 *                       Earnings:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             SalaryHeadId:
 *                               type: integer
 *                               example: 21
 *                             SalaryHead:
 *                               type: string
 *                               example: "Basic"
 *                             Amount:
 *                               type: number
 *                               example: 20666.67
 *                       Deductions:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             SalaryHeadId:
 *                               type: integer
 *                               example: 23
 *                             SalaryHead:
 *                               type: string
 *                               example: "PF"
 *                             Amount:
 *                               type: number
 *                               example: 2400
 *       401:
 *         description: Unauthorized – Invalid or missing token
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /Visitor/Pass/getvisitorsList:
 *   get:
 *     summary: Get Visitors List
 *     description: |
 *       Fetches the list of visitors based on the given SuperId.
 *     tags:
 *       - ZkVisitors
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: SuperId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Organization Super ID
 *     responses:
 *       200:
 *         description: Successfully retrieved visitors list
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 ResultData:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       ID:
 *                         type: integer
 *                         example: 1
 *                       SuperId:
 *                         type: integer
 *                         example: 1
 *                       Name:
 *                         type: string
 *                         example: "Ramesh Kumar"
 *                       Mobile:
 *                         type: string
 *                         example: "9876543210"
 *                       Email:
 *                         type: string
 *                         example: "ramesh@gmail.com"
 *                       VehicleNo:
 *                         type: string
 *                         example: "TS09AB1234"
 *                       IsPrimary:
 *                         type: boolean
 *                         example: true
 *                       IsActive:
 *                         type: boolean
 *                         example: true
 *                       CreatedOn:
 *                         type: string
 *                         format: date-time
 *                         example: "2026-02-12T10:00:00Z"
 *       401:
 *         description: Unauthorized – Invalid or missing token
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /Visitor/Pass/Addvisitor:
 *   post:
 *     summary: Add Visitor and Create Appointment
 *     description: |
 *       Creates a new visitor in VisitorDetails table and automatically
 *       creates an appointment entry in the Appointments table.
 *       EndDateTime is calculated using Duration (in minutes) + StartDateTime.
 *     tags:
 *       - ZkVisitors
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
 *               - VisitorName
 *               - Mobile
 *               - TransactionDate
 *               - Duration
 *               - StartDateTime
 *               - VisitType
 *               - HostedBy
 *               - RequestedBy
 *               - Purpose
 *               - CreatedBy
 *             properties:
 *               SuperId:
 *                 type: integer
 *                 example: 1
 *               VisitorName:
 *                 type: string
 *                 example: "Ramesh Kumar"
 *               Mobile:
 *                 type: string
 *                 example: "9876543210"
 *               Email:
 *                 type: string
 *                 example: "ramesh@gmail.com"
 *               VehicleNo:
 *                 type: string
 *                 example: "TS09AB1234"
 *               TransactionDate:
 *                 type: string
 *                 format: date
 *                 example: "2026-02-12"
 *               Duration:
 *                 type: integer
 *                 description: Duration in minutes
 *                 example: 60
 *               StartDateTime:
 *                 type: string
 *                 format: date-time
 *                 example: "2026-02-12T10:00:00"
 *               VisitType:
 *                 type: string
 *                 example: "Business Meeting"
 *               HostedBy:
 *                 type: integer
 *                 example: 101
 *               RequestedBy:
 *                 type: integer
 *                 example: 102
 *               Purpose:
 *                 type: string
 *                 example: "Discussion regarding project requirements"
 *               CreatedBy:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Visitor and Appointment created successfully
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
 *                   example: "Visitor and appointment created successfully"
 *                 VisitorId:
 *                   type: integer
 *                   example: 25
 *       401:
 *         description: Unauthorized – Invalid or missing token
 *       500:
 *         description: Internal server error
 */
