const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const controller = require('./controller');
const service = require('./service');

jest.mock('./service');

describe("person controller", () => {
    const mockData = [{
        "id": 1,
        "manufacture": "Manufacture1",
        "product": "Product1",
        "lot": "1",
        "doseInterval": "1"
    }, {
        "id": 2,
        "manufacture": "Manufacture2",
        "product": "Product2",
        "lot": "2",
        "doseInterval": "2"
    }, {
        "id": 3,
        "manufacture": "Manufacture3",
        "product": "Product3",
        "lot": "3",
        "doseInterval": "3"
    }, {
        "id": 4,
        "manufacture": "Manufacture4",
        "product": "Product4",
        "lot": "4",
        "doseInterval": "4"
    }, {
        "id": 5,
        "manufacture": "Manufacture5",
        "product": "Product5",
        "lot": "5",
        "doseInterval": "5"
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        service.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const ID = 1;

        const request = mockRequest({
            params: {
                id: ID
            }
        });

        return controller.findOne(request, response, nextFunction)
            .then( () => {
                expect(service.findOne).toBeCalledWith(ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === ID)
                );                
            })
    });
});