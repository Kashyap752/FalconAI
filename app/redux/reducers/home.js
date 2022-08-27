import {
    UI_PLANET_EMPTY,
    UI_PLANET_FAILED,
    UI_PLANET_SAVE,
    UI_PLANET_START,
    UI_PLANET_SUCCESS,
    UI_VEHICLE_EMPTY,
    UI_VEHICLE_FAILED,
    UI_VEHICLE_SAVE,
    UI_VEHICLE_START,
    UI_VEHICLE_SUCCESS,
} from "../actions/actionTypes.js";

export const initialState = {
    isPlanetLoading: false,
    isPlanetFailed: false,
    isPlanetSuccess: false,
    isVehicleLoading: false,
    isVehicleFailed: false,
    isVehicleSuccess: false
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case UI_PLANET_START:
            return {
                ...state,
                isPlanetLoading: true,
                isPlanetSuccess: false,
                isPlanetFailed: false
            }
        case UI_PLANET_SUCCESS:
            return {
                ...state,
                isPlanetLoading: false,
                isPlanetSuccess: true,
                isPlanetFailed: false
            }
        case UI_PLANET_FAILED:
            return {
                ...state,
                isPlanetLoading: false,
                isPlanetSuccess: false,
                isPlanetFailed: true
            }
        case UI_PLANET_SAVE:
            return {
                ...state,
                isPlanetLoading: false,
                isPlanetFailed: false,
                planetData: action.planetData
            }
        case UI_PLANET_EMPTY:
            return {
                ...state,
                isPlanetLoading: false,
                isPlanetSuccess: false,
                isPlanetFailed: false,
                planetData: {}
            }
        case UI_VEHICLE_START:
            return {
                ...state,
                isVehicleLoading: true,
                isVehicleSuccess: false,
                isVehicleFailed: false
            }
        case UI_VEHICLE_SUCCESS:
            return {
                ...state,
                isVehicleLoading: false,
                isVehicleSuccess: true,
                isVehicleFailed: false
            }
        case UI_VEHICLE_FAILED:
            return {
                ...state,
                isVehicleLoading: false,
                isVehicleSuccess: false,
                isVehicleFailed: true
            }
        case UI_VEHICLE_SAVE:
            return {
                ...state,
                isVehicleLoading: false,
                isVehicleFailed: false,
                vehicleData: action.vehicleData
            }
        case UI_VEHICLE_EMPTY:
            return {
                ...state,
                isVehicleLoading: false,
                isVehicleSuccess: false,
                isVehicleFailed: false,
                vehicleData: {}
            }
        default:
            return state;
    }
}

export default homeReducer;