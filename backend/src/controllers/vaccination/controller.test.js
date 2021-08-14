const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const controller = require('./controller');
const service = require('./service');

jest.mock('./service');

describe("person controller", () => {
    const mockData = [{
        "id": 1,
        "patient": "Patient1",
        "vaccine": "Vaccine1",
        "date": "2020-01-01",
        "dose": "1",
        "injectionSite": "InjectionSite1",
        "injectionType": "InjectionType1",
        "adverseEvent": "AdverseEvent1",
        "eeszt": "EESZT1",
        "place": "Place1"
    }, {
        "id": 2,
        "patient": "Patient2",
        "vaccine": "Vaccine2",
        "date": "2020-01-02",
        "dose": "2",
        "injectionSite": "InjectionSite2",
        "injectionType": "InjectionType2",
        "adverseEvent": "AdverseEvent2",
        "eeszt": "EESZT2",
        "place": "Place2"
    }, {
        "id": 3,
        "patient": "Patient3",
        "vaccine": "Vaccine3",
        "date": "2020-01-03",
        "dose": "3",
        "injectionSite": "InjectionSite3",
        "injectionType": "InjectionType3",
        "adverseEvent": "AdverseEvent3",
        "eeszt": "EESZT3",
        "place": "Place3"
    }, {
        "id": 4,
        "patient": "Patient4",
        "vaccine": "Vaccine4",
        "date": "2020-01-04",
        "dose": "4",
        "injectionSite": "InjectionSite4",
        "injectionType": "InjectionType4",
        "adverseEvent": "AdverseEvent4",
        "eeszt": "EESZT4",
        "place": "Place4"
    }, {
        "id": 5,
        "patient": "Patient5",
        "vaccine": "Vaccine5",
        "date": "2020-01-05",
        "dose": "5",
        "injectionSite": "InjectionSite5",
        "injectionType": "InjectionType5",
        "adverseEvent": "AdverseEvent5",
        "eeszt": "EESZT5",
        "place": "Place5"
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