// 获取操作系统版本
export function getOS() {
    const { userAgent, platform } = window.navigator;
    const lowerUserAgent = userAgent.toLocaleLowerCase();
    const isWin = (platform === 'Win32') || (platform === 'Windows');
    const isMac = (platform === 'Mac68K') || (platform === 'MacPPC') || (platform === 'Macintosh') || (platform === 'MacIntel');
    if (isMac) return 'Mac';
    const isUnix = (platform === 'X11') && !isWin && !isMac;
    if (isUnix) return 'Unix';
    const isLinux = String(platform).indexOf('Linux') > -1;
    if (isLinux) return 'Linux';
    if (isWin) {
      const isWin2K = lowerUserAgent.indexOf('windows nt 5.0') > -1 || lowerUserAgent.indexOf('windows 2000') > -1;
      if (isWin2K) return 'Win2000';
      const isWinXP = lowerUserAgent.indexOf('windows nt 5.1') > -1 || lowerUserAgent.indexOf('windows xp') > -1;
      if (isWinXP) return 'WinXP';
      const isWin2003 = lowerUserAgent.indexOf('windows nt 5.2') > -1 || lowerUserAgent.indexOf('windows 2003') > -1;
      if (isWin2003) return 'WinXP';
      const isWinVista = lowerUserAgent.indexOf('windows nt 6.0') > -1 || lowerUserAgent.indexOf('windows vista') > -1;
      if (isWinVista) return 'WinVista';
      const isWin7 = lowerUserAgent.indexOf('windows nt 6.1') > -1 || lowerUserAgent.indexOf('windows 7') > -1;
      if (isWin7) return 'Win7';
      const isWin10 = lowerUserAgent.indexOf('windows nt 10') > -1 || lowerUserAgent.indexOf('windows 10') > -1;
      if (isWin10) return 'Win10';
    }
    return 'otherOS';
  }

export function demoFun() {
  return new Promise((resolve) => {
    return resolve('hello es6 promise');
  });
}
export class Test {
  constructor(name) {
    this.name = name;
  }

  logger () {
    console.log("Hello", this.name);
  }
}