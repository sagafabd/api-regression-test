export const eventTestCase={
    positiveCase: {
        describe: "Get Securities - Positive Case",
        successResult: "Get all data securities and success response",
        validateDataById: "Get data by id securities",
        validateDataByName: "Get data by name securities",
        createNewData: "Create data securities",
        updateNewData: "Update data securities",
        deleteDataById: "Delete data by id securities",
        compareData: "Compare data result securities",
    },
    negativeCase: {
        describe: "Get Securities - Negative Case",
        invalidToken: "Get all data securities and invlid token",
        blankToken: "Get all data securities and blank token",
        errorCode500: "Get all data securities and error code 500",
        blankToken: "Get all data securities and blank token",
    }
}