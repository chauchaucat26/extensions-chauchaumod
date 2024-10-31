Scratch.translate.setup({"ja":{"_Device":"デバイス","_getT":"[ip]の[thing]","_ip":"現在のIPアドレス","_country":"国","_country_name":"国名","_version":"バージョン","_city":"都市","_battery":"バッテリーの[thing]","_level":"残量","_dischargingTime":"残量残り時間","_chargingTime":"充電残り時間","_charging":"充電している"}});/* end generated l10n code */(function (Scratch) {
    "use strict";

    class Device {
      getInfo() {
        return {
          id: "device",
          name: Scratch.translate("Device"),
          blocks: [
            {
              opcode: "get",
              blockType: Scratch.BlockType.REPORTER,
              text: Scratch.translate("getT"),
              arguments: {
                ip: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: "102.128.255.255",
                },
                thing: {
                  type: Scratch.ArgumentType.STRING,
                  menu: "gT",
                },
              },
            },
            {
              opcode: "ip",
              blockType: Scratch.BlockType.REPORTER,
              text: Scratch.translate("ip"),
            },
            {
              opcode: "battery",
              blockType: Scratch.BlockType.REPORTER,
              text: Scratch.translate("battery"),
              arguments: {
                thing: {
                  type: Scratch.ArgumentType.STRING,
                  menu: "gB",
                },
              },
            },
            {
              opcode: "charging",
              blockType: Scratch.BlockType.BOOLEAN,
              text: Scratch.translate("charging"),
            },
          ],
          menus: {
                gT: {
                    acceptReporters: false,
                    items: [
                      {
                        text: Scratch.translate("country"),
                        value: "country",
                      },
                      {
                        text: Scratch.translate("country_name"),
                        value: "country_name",
                      },
                      {
                        text: Scratch.translate("version"),
                        value: "version",
                      },
                      {
                        text: Scratch.translate("city"),
                        value: "city",
                      },
                    ],
                },
                gB: {
                    acceptReporters: false,
                    items: [
                      {
                        text: Scratch.translate("level"),
                        value: "level",
                      },
                      {
                        text: Scratch.translate("dischargingTime"),
                        value: "dischargingTime",
                      },
                      {
                        text: Scratch.translate("chargingTime"),
                        value: "chargingTime",
                      },
                    ],
                },
          },
        };
      }
  
      async get(args) {
        if (!await Scratch.canGeolocate()) return "";
        try {
        const response = await fetch("https://ipapi.co/" + args["ip"] + "/json/");
        const data = await response.json();
        const ip = args["thing"];
        return data[ip] ? data[ip] : "";
        } catch (error) { return "NaN" }
      }
      async ip() {
        if (!await Scratch.canGeolocate()) return "";
        try {
        const response = await fetch("https://ipinfo.io/?callback");
        const data = await response.json();
        return data.ip ? data.ip : "";
        } catch (error) { return "NaN" }
      }
      battery(args) {
        return navigator.getBattery()
        .then(battery => {
            const key = args["thing"];
            return battery[key];
        })
            .catch(error => {
            return null;
        });
      }
      charging(){
        return navigator.getBattery()
        .then(battery => {
            return battery.charging;
        })
            .catch(error => {
            return null;
        });
      } 
        
    }
  
    Scratch.extensions.register(new Device());
  })(Scratch);
