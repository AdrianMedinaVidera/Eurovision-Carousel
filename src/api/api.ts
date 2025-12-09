export const obtenerDatosEdicion = async (year: number) => {
    try {
        const response = await fetch(`https://eurovisionapi.runasp.net/api/senior/contests/${year}`, {method: "GET"}); //Por defecto, fetch hace GET. || {method: "GET"}
        if (response.ok) {
            const datos = await response.json();
            return datos;
        }
    }
    catch {
        console.log("Error!!");
    }
}

export const obtenerAños = async () => {
    try {
        const response = await fetch(`https://eurovisionapi.runasp.net/api/senior/contests/years`, {method: "GET"}); //Por defecto, fetch hace GET. || {method: "GET"}
        if (response.ok) {
            const datos = await response.json();
            return datos;
        }
    }
    catch {
        console.log("Error!!");
    }
}

export const obtenerPaises = async () => {
    try {
        const response = await fetch(`https://eurovisionapi.runasp.net/api/countries`, {method: "GET"});
        if (response.ok) {
            const datos = await response.json();
            return datos;
        }
    }
    catch {
        console.log("Error!!");
    }
}

export const obtenerDatosConcursante = async (year: number, id: number) => {
    try {
        const response = await fetch(`https://eurovisionapi.runasp.net/api/senior/contests/${year}/contestants/${id}`, {method: "GET"});
        if (response.ok) {
            const datos = await response.json();
            return datos;
        }
    }
    catch {
        console.log("Error!!");
    }
}



