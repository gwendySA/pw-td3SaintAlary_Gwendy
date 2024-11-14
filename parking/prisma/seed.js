"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var city1, city2, city3, city4, city5, parking1, parking2, parking3, parking4, parking5, parking6, parking7, spot1, spot2, spot3, spot4, spot5, spot6, spot7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.city.create({
                        data: {
                            name: "Aix-en-Provence",
                            slug: "aix-en-provence",
                            location: JSON.stringify({ latitude: 43.533329, longitude: 5.43333 }),
                            country: "France",
                        },
                    })];
                case 1:
                    city1 = _a.sent();
                    return [4 /*yield*/, prisma.city.create({
                            data: {
                                name: "La Spezia",
                                slug: "la-spezia",
                                location: JSON.stringify({ latitude: 44.238366, longitude: 9.6912326 }),
                                country: "Italie",
                            },
                        })];
                case 2:
                    city2 = _a.sent();
                    return [4 /*yield*/, prisma.city.create({
                            data: {
                                name: "Aix-la-Chapelle",
                                slug: "aix-la-chapelle",
                                location: JSON.stringify({ latitude: 50.776351, longitude: 6.083862 }),
                                country: "Allemagne",
                            },
                        })];
                case 3:
                    city3 = _a.sent();
                    return [4 /*yield*/, prisma.city.create({
                            data: {
                                name: "San Cristóbal de La Laguna",
                                slug: "san-cristobal-de-la-laguna",
                                location: JSON.stringify({ latitude: 28.4871807, longitude: -16.313879 }),
                                country: "Espagne",
                            },
                        })];
                case 4:
                    city4 = _a.sent();
                    return [4 /*yield*/, prisma.city.create({
                            data: {
                                name: "Newcastle upon Tyne",
                                slug: "newcastle-upon-tyne",
                                location: JSON.stringify({ latitude: 54.9738474, longitude: -1.6131572 }),
                                country: "Angleterre",
                            },
                        })];
                case 5:
                    city5 = _a.sent();
                    return [4 /*yield*/, prisma.parking.create({
                            data: {
                                name: "A",
                                location: JSON.stringify({ latitude: 43.533329, longitude: 5.43333 }),
                                numberOfPlaces: 100,
                                hourlyRate: 4.5,
                                cityId: city1.id,
                            },
                        })];
                case 6:
                    parking1 = _a.sent();
                    return [4 /*yield*/, prisma.parking.create({
                            data: {
                                name: "B",
                                location: JSON.stringify({ latitude: 44.238366, longitude: 9.6912326 }),
                                numberOfPlaces: 50,
                                hourlyRate: 3,
                                cityId: city2.id,
                            },
                        })];
                case 7:
                    parking2 = _a.sent();
                    return [4 /*yield*/, prisma.parking.create({
                            data: {
                                name: "C",
                                location: JSON.stringify({ latitude: 44.238366, longitude: 9.6912326 }),
                                numberOfPlaces: 80,
                                hourlyRate: 2.5,
                                cityId: city2.id,
                            },
                        })];
                case 8:
                    parking3 = _a.sent();
                    return [4 /*yield*/, prisma.parking.create({
                            data: {
                                name: "D",
                                location: JSON.stringify({ latitude: 50.776351, longitude: 6.083862 }),
                                numberOfPlaces: 40,
                                hourlyRate: 2.8,
                                cityId: city3.id,
                            },
                        })];
                case 9:
                    parking4 = _a.sent();
                    return [4 /*yield*/, prisma.parking.create({
                            data: {
                                name: "E",
                                location: JSON.stringify({ latitude: 28.4871807, longitude: -16.313879 }),
                                numberOfPlaces: 70,
                                hourlyRate: 3.1,
                                cityId: city4.id,
                            },
                        })];
                case 10:
                    parking5 = _a.sent();
                    return [4 /*yield*/, prisma.parking.create({
                            data: {
                                name: "F",
                                location: JSON.stringify({ latitude: 54.9738474, longitude: -1.6131572 }),
                                numberOfPlaces: 60,
                                hourlyRate: 2.4,
                                cityId: city5.id,
                            },
                        })];
                case 11:
                    parking6 = _a.sent();
                    return [4 /*yield*/, prisma.parking.create({
                            data: {
                                name: "G",
                                location: JSON.stringify({ latitude: 54.9738474, longitude: -1.6131572 }),
                                numberOfPlaces: 90,
                                hourlyRate: 3.2,
                                cityId: city5.id,
                            },
                        })];
                case 12:
                    parking7 = _a.sent();
                    return [4 /*yield*/, prisma.spot.create({
                            data: {
                                parkingId: parking1.id,
                            },
                        })];
                case 13:
                    spot1 = _a.sent();
                    return [4 /*yield*/, prisma.spot.create({
                            data: {
                                parkingId: parking2.id,
                            },
                        })];
                case 14:
                    spot2 = _a.sent();
                    return [4 /*yield*/, prisma.spot.create({
                            data: {
                                parkingId: parking3.id,
                            },
                        })];
                case 15:
                    spot3 = _a.sent();
                    return [4 /*yield*/, prisma.spot.create({
                            data: {
                                parkingId: parking4.id,
                            },
                        })];
                case 16:
                    spot4 = _a.sent();
                    return [4 /*yield*/, prisma.spot.create({
                            data: {
                                parkingId: parking5.id,
                            },
                        })];
                case 17:
                    spot5 = _a.sent();
                    return [4 /*yield*/, prisma.spot.create({
                            data: {
                                parkingId: parking6.id,
                            },
                        })];
                case 18:
                    spot6 = _a.sent();
                    return [4 /*yield*/, prisma.spot.create({
                            data: {
                                parkingId: parking7.id,
                            },
                        })];
                case 19:
                    spot7 = _a.sent();
                    console.log('Villes, Parkings et Places insérés avec succès!');
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
