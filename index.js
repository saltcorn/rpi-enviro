const pythonBridge = require("python-bridge");

let python = pythonBridge({
  python: "python3",
});

python.ex`from enviroplus import gas`;
python.ex`from bme280 import BME280`;

python.ex`bme280 = BME280()`;
python.ex`bme280.update_sensor()`;

//python.end();

const bme280_temperature = {
  run: () => python`bme280.get_temperature()`,
  isAsync: true,
};
const bme280_humidity = {
  run: () => python`bme280.get_humidity()`,
  isAsync: true,
};
const bme280_pressure = {
  run: () => python`bme280.get_pressure()`,
  isAsync: true,
};
module.exports = {
  sc_plugin_api_version: 1,
  functions: { bme280_temperature, bme280_humidity, bme280_pressure },
};
