import axios from "axios";
import API from "../../config/endpoint";
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
} from "./actionTypes.js"

export const getPlanetData = () => {
    return (dispatch) => {
        dispatch(uiPlanetStart());
        axios.get(API.LIST_OF_PLANETS)
            .then((response) => {
                if (response && response.data) {
                    dispatch(uiSavePlanetData(response.data));
                    dispatch(uiPlanetSuccess())
                } else {
                    dispatch(uiSavePlanetData([]));
                    dispatch(uiPlanetSuccess());
                }
            })
            .catch((er) => {
                dispatch(uiPlanetFailed());
                console.log("Error", er);
            })
    }
}

export const getVehicleData = () => {
    return (dispatch) => {
        dispatch(uiVehicleStart());
        axios.get(API.LIST_OF_VEHICLES)
            .then((response) => {
                if (response && response.data) {
                    dispatch(uiSaveVehicleData(response.data));
                    dispatch(uiVehicleSuccess())
                } else {
                    dispatch(uiSaveVehicleData([]));
                    dispatch(uiVehicleSuccess());
                }
            })
            .catch((er) => {
                dispatch(uiVehicleFailed());
                console.log("Error", er);
            })
    }
}
const uiPlanetSuccess = () => {
    return {
        type: UI_PLANET_SUCCESS
    }
}

const uiPlanetStart = () => {
    return {
        type: UI_PLANET_START
    }
}

const uiSavePlanetData = (data) => {
    return {
        type: UI_PLANET_SAVE,
        planetData: data
    }
}

const uiPlanetFailed = () => {
    return {
        type: UI_PLANET_FAILED
    }
}

export const uiPlanetEmpty = () => {
    return {
        type: UI_PLANET_EMPTY
    }
}

const uiVehicleSuccess = () => {
    return {
        type: UI_VEHICLE_SUCCESS
    }
}

const uiVehicleStart = () => {
    return {
        type: UI_VEHICLE_START
    }
}

const uiSaveVehicleData = (data) => {
    return {
        type: UI_VEHICLE_SAVE,
        vehicleData: data
    }
}

const uiVehicleFailed = () => {
    return {
        type: UI_VEHICLE_FAILED
    }
}

export const uiVehicleEmpty = () => {
    return {
        type: UI_VEHICLE_EMPTY
    }
}