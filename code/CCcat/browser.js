var setumei = "";
var ppre = "";
var aldt = "";
/* generated l10n code */Scratch.translate.setup({"ja":{"_Browser":"ブラウザ","_Nowbr":"現在のブラウザ","_SSR":"[link]を[name]という名前で共有","_STC":"共有時の説明を[txt]にする","_GS":"共有時の説明","_alt":"[txt]とポップアップする","_altyn":"[txt]とポップアップで確認する","_altttp":"[txt]と聞く","_altdt":"デフォルトのテキストを[txt]にする","_altty":"入力できる属性を[type]にする","_altdtre":"デフォルトのテキスト","_altynre":"ポップアップの結果","_getNow":"現在の[thing]","_parameter":"パラメータ","_pass":"パス","_host":"ホスト","_Getpm":"パラメータから[txt]の値を取得","_Delpm":"パラメータから[txt]の値を削除","_Addpm":"パラメータに[name]の値を[value]にする","_Havpm":"パラメータに[txt]が存在する？"}});/* end generated l10n code */(function (Scratch) {
"use strict";

class Browser {
  getInfo() {
    return {    
      id: "fetch",
      blockIconURI: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MS4zNzcxNyIgaGVpZ2h0PSI1MS4zNzcxNyIgdmlld0JveD0iMCwwLDUxLjM3NzE3LDUxLjM3NzE3Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjE0LjMxMTQyLC0xNTQuMzExNDEpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjE0LjMxMTQyLDE4MGMwLC0xNC4xODc0MSAxMS41MDExNywtMjUuNjg4NTkgMjUuNjg4NTksLTI1LjY4ODU5YzE0LjE4NzQxLDAgMjUuNjg4NTksMTEuNTAxMTcgMjUuNjg4NTksMjUuNjg4NTljMCwxNC4xODc0MSAtMTEuNTAxMTcsMjUuNjg4NTkgLTI1LjY4ODU5LDI1LjY4ODU5Yy0xNC4xODc0MSwwIC0yNS42ODg1OSwtMTEuNTAxMTcgLTI1LjY4ODU5LC0yNS42ODg1OXoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjQwLDE2MS4wMjg4M2MxMC40Nzc0OSwwIDE4Ljk3MTE3LDguNDkzNjggMTguOTcxMTcsMTguOTcxMTdjMCwxMC40Nzc0OSAtOC40OTM2OCwxOC45NzExNyAtMTguOTcxMTcsMTguOTcxMTdjLTEwLjQ3NzQ5LDAgLTE4Ljk3MTE3LC04LjQ5MzY4IC0xOC45NzExNywtMTguOTcxMTdjMCwtMTAuNDc3NDkgOC40OTM2OCwtMTguOTcxMTcgMTguOTcxMTcsLTE4Ljk3MTE3eiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yNDAsMTYxLjAyODgzYzUuMjM4NzQsMCA5LjQ4NTU5LDguNDkzNjggOS40ODU1OSwxOC45NzExN2MwLDEwLjQ3NzQ5IC00LjI0Njg0LDE4Ljk3MTE3IC05LjQ4NTU5LDE4Ljk3MTE3Yy01LjIzODc0LDAgLTkuNDg1NTgsLTguNDkzNjggLTkuNDg1NTgsLTE4Ljk3MTE3YzAsLTEwLjQ3NzQ5IDQuMjQ2ODQsLTE4Ljk3MTE3IDkuNDg1NTgsLTE4Ljk3MTE3eiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yMjEuMDI4ODMsMTgwaDM3Ljk0MjM0IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yNDAsMTYxLjAyODgzdjM3Ljk0MjM0IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMjUuMjE2NiwxOTEuNzcxMDdjMy40NzczOCwtMi4xNTg5OCA4LjgwNzc0LC0zLjU0MDM5IDE0Ljc4MzQsLTMuNTQwMzljNS43MDgwOSwwIDEwLjgyNzM4LDEuMjYwNDcgMTQuMzA1MjUsMy4yNTUxIiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTI1NC4zMDUyNSwxNjguNTE0MjJjLTMuNDc3ODcsMS45OTQ2MyAtOC41OTcxNiwzLjI1NTEgLTE0LjMwNTI1LDMuMjU1MWMtNS45NzU2NiwwIC0xMS4zMDYwMywtMS4zODE0MiAtMTQuNzgzNCwtMy41NDAzOSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MjUuNjg4NTgyMDEwNjc3MTUyOjI1LjY4ODU4NzAxMDY3NzE5Ni0tPg==",
      name: Scratch.translate("Browser"),
      color1: "#c2c2c2",
      color2: "#b0b0b0",
      blocks: [
        {
          opcode: "getCur",
          blockType: Scratch.BlockType.REPORTER,
          text: Scratch.translate("Nowbr"),
        },
        {
            opcode: "siteSr",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("SSR"),
            arguments: {
              link: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "https://www.kobakoo.com/",
              },
              name: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "KBKのホールページ",
              },
            },
        },
        {
            opcode: "Srttc",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("STC"),
            arguments: {
              txt: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "KBKのホールページのリンク",
              },
            },
        },
        {
            opcode: "alt",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("alt"),
            arguments: {
              txt: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "こんにちは！",
              },
            },
        },
        {
            opcode: "altyn",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("altyn"),
            arguments: {
              txt: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "あなたは万物を愛していますか？",
              },
            },
        },
        {
            opcode: "alttp",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("altttp"),
            arguments: {
              txt: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "あなたは誰ですか？",
              },
            },
        },
        {
            opcode: "altdt",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("altdt"),
            arguments: {
              txt: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "例:新世界の王",
              },
            },
        },
        {
            opcode: "altdtre",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("altdtre"),
        },
        {
            opcode: "altynre",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("altynre"),
        },
        {
            opcode: "getNow",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("getNow"),
            disableMonitor: true,
                arguments: {
                    thing:  {
                        type: Scratch.ArgumentType.STRING,
                        menu: "nowM",
                    },
                },
        },
        {
            opcode: "Getpm",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("Getpm"),
            arguments: {
              txt: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "txt",
              },
            },
        },
        {
            opcode: "Delpm",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("Delpm"),
            arguments: {
              txt: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "txt",
              },
            },
        },
        {
            opcode: "Addpm",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("Addpm"),
            arguments: {
              name: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "name",
              },
              value: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "value",
              },
            },
        },
        {
            opcode: "Havpm",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("Havpm"),
            arguments: {
              txt: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "txt",
              },
            },
        },
      ],
      menus: {
            nowM: {
                acceptReporters: false,
                items: [
                  {
                    text: Scratch.translate("URL"),
                    value: "1",
                  },
                  {
                    text: Scratch.translate("parameter"),
                    value: "2",
                  },
                  {
                    text: Scratch.translate("pass"),
                    value: "3",
                  },
                  {
                    text: Scratch.translate("host"),
                    value: "4",
                  },
                ],
            },
      },
    };
  }
  

  getCur() {
        const userAgent = navigator.userAgent;
        var browserName;

        if (userAgent.indexOf("Edg") > -1) {
          browserName = "Edge";
        } else if (userAgent.indexOf("Firefox") > -1) {
          browserName = "Firefox";
        } else if (userAgent.indexOf("Safari") > -1) {
          browserName = "Safari";
        } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
          browserName = "Internet Explorer";
        } else if (userAgent.indexOf("Chrome") > -1) {
          browserName = "Chrome";
        } else {
            browserName = "Other";
        }

        return browserName;
  }
  siteSr(args) {
    navigator.share({
        title: args["name"],
        text: setumei,
        url: args["link"]
    });
  }
  Srttc(args) {
        setumei = args["txt"];
  }
  getst() {
    return setumei;
  }
  alt(args) {
    alert(args["txt"]);
  }
  altyn(args) {
    ppre = window.confirm(args["txt"]);
    return ppre;
  }
  alttp(args) {
    ppre = prompt(args["txt"], aldt);
    return ppre;
  }
  altdt(args) {
    aldt = args["txt"];
  }
  altdtre() {
    return aldt;
  }
  getNow(args) {
    if (args["thing"] == 1) {
        return location.href;
    } else if (args["thing"] == 2) {
        return location.search;
    } else if (args["thing"] == 3) {
        return location.pathname;
    } else if (args["thing"] == 4) {
        return location.host;
    };
  }
  altynre() {
    return ppre;
  }
  Getpm(args) {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var data =url.searchParams.get(args["txt"]);
    return data;
  }
  Delpm(args) {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.delete(args["txt"]);
    window.history.replaceState({}, '', currentUrl.toString());
  }
  Addpm(args) {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has(args["name"])) {
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set(args["name"], args["value"]);
        window.history.replaceState({}, '', currentUrl.toString());
    } else {
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.append(args["name"], args["value"]);
        window.history.replaceState({}, '', currentUrl.toString());
    }
  }
  Havpm(args) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.has(args["txt"]);
  }
}

Scratch.extensions.register(new Browser());
})(Scratch);
