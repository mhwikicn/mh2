skillGrp = new Array(83);
skillGrp[1] = "受身";
skillGrp[2] = "运气";
skillGrp[3] = "搬运";
skillGrp[4] = "自动防御";
skillGrp[5] = "防御性能";
skillGrp[6] = "回复";
skillGrp[7] = "回复速度";
skillGrp[8] = "扩散弹追加";
skillGrp[9] = "加护";
skillGrp[10] = "雷耐性";
skillGrp[11] = "贯通弹强化";
skillGrp[12] = "贯通弹追加";
skillGrp[13] = "气绝";
skillGrp[14] = "反覆无常";
skillGrp[15] = "利度";
skillGrp[16] = "贪吃鬼";
skillGrp[17] = "气息";
skillGrp[18] = "达人";
skillGrp[19] = "广域回复";
skillGrp[20] = "广域解毒";
skillGrp[21] = "攻击";
skillGrp[22] = "采取";
skillGrp[23] = "散弹强化";
skillGrp[24] = "散弹追加";
skillGrp[25] = "睡眠";
skillGrp[26] = "全耐性ＵＰ";
skillGrp[27] = "千里眼";
skillGrp[28] = "装填";
skillGrp[29] = "耐寒";
skillGrp[30] = "耐暑";
skillGrp[31] = "体力";
skillGrp[32] = "匠";
skillGrp[33] = "種广域化";
skillGrp[34] = "弹调合";
skillGrp[35] = "地图";
skillGrp[36] = "听觉保护";
skillGrp[37] = "调合成功率";
skillGrp[38] = "通常弹强化";
skillGrp[39] = "通常弹追加";
skillGrp[40] = "垂钓";
skillGrp[41] = "胴系統＋１";
skillGrp[42] = "胴系統＋２";
skillGrp[43] = "胴系统倍加";
skillGrp[44] = "投掷";
skillGrp[45] = "研磨师";
skillGrp[46] = "毒";
skillGrp[47] = "特殊攻击";
skillGrp[48] = "肉";
skillGrp[49] = "偷盗无效";
skillGrp[50] = "爆弹强化";
skillGrp[51] = "饥饿";
skillGrp[52] = "反动";
skillGrp[53] = "火耐性";
skillGrp[54] = "风压";
skillGrp[55] = "笛";
skillGrp[56] = "防御";
skillGrp[57] = "麻痹";
skillGrp[58] = "水耐性";
skillGrp[59] = "龍耐性";
skillGrp[60] = "榴弹追加";
skillGrp[61] = "炼金术";
skillGrp[62] = "连射";
skillGrp[63] = "高速收集";
skillGrp[64] = "回避性能";
skillGrp[65] = "底力";
skillGrp[66] = "效果持续";
skillGrp[67] = "耐力";
skillGrp[68] = "装填数";
skillGrp[69] = "精密射击";
skillGrp[70] = "怪物";
skillGrp[71] = "食事";
skillGrp[72] = "剥取";
skillGrp[73] = "地形";
skillGrp[74] = "抗菌・抗毒";
skillGrp[75] = "耐雪";
skillGrp[76] = "冰耐性";
skillGrp[77] = "耐震";
skillGrp[78] = "广域";
skillGrp[79] = "声带";
skillGrp[80] = "烤肉";
skillGrp[81] = "炮术师";


function ShowBoguList()
{
  html = "";
  html += "<TABLE border='1' cellspacing='0' cellpadding='2' class='cnt-tb2' width='270'>";
  html += "<TBODY><TR><TH class='tb-th4' colspan='4'>头装备</TH></TR>";
  html += FormatHeadList();
  html += "</TBODY></TABLE>";
  headlist.innerHTML = html;


  html = "";
  html += "<TABLE border='1' cellspacing='0' cellpadding='2' class='cnt-tb2' width='270'>";
  html += "<TBODY><TR><TH class='tb-th4' colspan='4'>胴装备</TH></TR>";
  html += FormatArmorList();
  html += "</TBODY></TABLE>";
  armorlist.innerHTML = html;


  html = "";
  html += "<TABLE border='1' cellspacing='0' cellpadding='2' class='cnt-tb2' width='270'>";
  html += "<TBODY><TR><TH class='tb-th4' colspan='4'>腕装备</TH></TR>";
  html += FormatArmList();
  html += "</TBODY></TABLE>";
  armlist.innerHTML = html;


  html = "";
  html += "<TABLE border='1' cellspacing='0' cellpadding='2' class='cnt-tb2' width='270'>";
  html += "<TBODY><TR><TH class='tb-th4' colspan='4'>腰装备</TH></TR>";
  html += FormatWaistList();
  html += "</TBODY></TABLE>";
  waistlist.innerHTML = html;


  html = "";
  html += "<TABLE border='1' cellspacing='0' cellpadding='2' class='cnt-tb2' width='270'>";
  html += "<TBODY><TR><TH class='tb-th4' colspan='4'>脚装备</TH></TR>";
  html += FormatFootList();
  html += "</TBODY></TABLE>";
  footlist.innerHTML = html;


  html = "";
  html += "<TABLE border='1' cellspacing='0' cellpadding='2' class='cnt-tb2' width='156'>";
  html += "<TBODY><TR><TH class='tb-th4' colspan='3'>装飾品</TH></TR>";
  html += FormatSoshList();
  html += "</TBODY></TABLE>";
  soshlist.innerHTML = html;
}


//------------------------------------------
// 頭装備のリスト作成
//------------------------------------------
function FormatHeadList()
{
  thtml = "";
  for (i=1; i<253; i++) {
    tval = SearchBogu(headspec[i]);
    if (tval.length > 0) {
      thtml += "<TR><TD class='tb-cell11' width='140'>";
      thtml += "<A href='../bugu/head.html#" + FixData(i,4) + "' target='_blank'>" + headname[i] + "</A></TD>";
      thtml += "<TD class='tb-cell11' width='38'>防：" + Number(headspec[i].substring(42,44)) + "</TD>";
      thtml += "<TD class='tb-cell1' width='30'>ス：" + Number(headspec[i].substring(44,45)) + "</TD>";
      thtml += "<TD class='tb-cell2' width='35'>" + tval + "</TD>";
      thtml += "</TR>";
    }
  }
  return thtml;
}

//------------------------------------------
// 胴装備のリスト作成
//------------------------------------------
function FormatArmorList()
{
  thtml = "";
  for (i=1; i<243; i++) {
    tval = SearchBogu(armorspec[i]);
    if (tval.length > 0) {
      thtml += "<TR><TD class='tb-cell11' width='140'>";
      thtml += "<A href='../bugu/armor.html#" + FixData(i,4) + "' target='_blank'>" + armorname[i] + "</A></TD>";
      thtml += "<TD class='tb-cell11' width='38'>防：" + Number(armorspec[i].substring(42,44)) + "</TD>";
      thtml += "<TD class='tb-cell1' width='30'>ス：" + Number(armorspec[i].substring(44,45)) + "</TD>";
      thtml += "<TD class='tb-cell2' width='35'>" + tval + "</TD>";
      thtml += "</TR>";
    }
  }
  return thtml;
}

//------------------------------------------
// 腕装備のリスト作成
//------------------------------------------
function FormatArmList()
{
  thtml = "";
  for (i=1; i<238; i++) {
    tval = SearchBogu(armspec[i]);
    if (tval.length > 0) {
      thtml += "<TR><TD class='tb-cell11' width='140'>";
      thtml += "<A href='../bugu/arm.html#" + FixData(i,4) + "' target='_blank'>" + armname[i] + "</A></TD>";
      thtml += "<TD class='tb-cell11' width='38'>防：" + Number(armspec[i].substring(42,44)) + "</TD>";
      thtml += "<TD class='tb-cell1' width='30'>ス：" + Number(armspec[i].substring(44,45)) + "</TD>";
      thtml += "<TD class='tb-cell2' width='35'>" + tval + "</TD>";
      thtml += "</TR>";
    }
  }
  return thtml;
}

//------------------------------------------
// 腰装備のリスト作成
//------------------------------------------
function FormatWaistList()
{
  thtml = "";
  for (i=1; i<237; i++) {
    tval = SearchBogu(waistspec[i]);
    if (tval.length > 0) {
      thtml += "<TR><TD class='tb-cell11' width='140'>";
      thtml += "<A href='../bugu/waist.html#" + FixData(i,4) + "' target='_blank'>" + waistname[i] + "</A></TD>";
      thtml += "<TD class='tb-cell11' width='38'>防：" + Number(waistspec[i].substring(42,44)) + "</TD>";
      thtml += "<TD class='tb-cell1' width='30'>ス：" + Number(waistspec[i].substring(44,45)) + "</TD>";
      thtml += "<TD class='tb-cell2' width='35'>" + tval + "</TD>";
      thtml += "</TR>";
    }
  }
  return thtml;
}

//------------------------------------------
// 脚装備のリスト作成
//------------------------------------------
function FormatFootList()
{
  thtml = "";
  for (i=1; i<236; i++) {
    tval = SearchBogu(footspec[i]);
    if (tval.length > 0) {
      thtml += "<TR><TD class='tb-cell11' width='140'>";
      thtml += "<A href='../bugu/foot.html#" + FixData(i,4) + "' target='_blank'>" + footname[i] + "</A></TD>";
      thtml += "<TD class='tb-cell11' width='38'>防：" + Number(footspec[i].substring(42,44)) + "</TD>";
      thtml += "<TD class='tb-cell1' width='30'>ス：" + Number(footspec[i].substring(44,45)) + "</TD>";
      thtml += "<TD class='tb-cell2' width='35'>" + tval + "</TD>";
      thtml += "</TR>";
    }
  }
  return thtml;
}

//------------------------------------------
// 装飾品のリスト作成
//------------------------------------------
function FormatSoshList()
{
  thtml = "";
  for (i=1; i<123; i++) {
    tval = SearchSosh(soshspec[i]);
    if (tval.length > 0) {
      thtml += "<TR><TD class='tb-cell11' width='75'>";
      thtml += "<A href='../bugu/soushoku.html#" + FixData(i,4) + "' target='_blank'>" + soshname[i] + "</A></TD>";
      thtml += "<TD class='tb-cell1' width='30'>ス：" + Number(soshspec[i].substring(24,25)) + "</TD>";
      thtml += "<TD class='tb-cell2' width='35'>" + tval + "</TD>";
      thtml += "</TR>";
    }
  }
  return thtml;
}



//****************************************************************
//  引数のスキル系統があるかサーチ(防具)
//****************************************************************
function SearchBogu(data)
{
  skgNo = Number(document.location.search.substring(1));
  skgVal = 0;
  for (ic=2; ic<32; ic+=6) {
    if (skgNo == Number(data.substring(ic,ic+3))) {
      skgVal += Number(data.substring(ic+3,ic+6));
    }
  }
  if (skgVal <= 0) {
    skgNo = Number(data.substring(2,5));
    if (skgNo == 41) {			//胴系統＋１
      return "胴+1";
    } else if (skgNo == 42) {		//胴系統＋２
      return "胴+2";
    } else if (skgNo == 43) {		//胴系统倍加
      return "胴x2";
    }
    return "";
  }
  return "+" + String(skgVal);
}
//****************************************************************
//  引数のスキル系統があるかサーチ(装飾品)
//****************************************************************
function SearchSosh(data)
{
  skgNo = Number(document.location.search.substring(1));
  skgVal = 0;
  for (ic=0; ic<24; ic+=6) {
    if (skgNo == Number(data.substring(ic,ic+3))) {
      skgVal += Number(data.substring(ic+3,ic+6));
    }
  }
  if (skgVal <= 0)  return "";
  return "+" + String(skgVal);
}



//****************************************************************
//  %0?d で書式化
//****************************************************************
function FixData(numb, nc)
{
  ttmp = "00000000" + numb;
  tk = ttmp.length;
  ttmp = ttmp.substring(tk-nc,tk);
  return ttmp;
}

//****************************************************************
//  %0?x で書式化
//****************************************************************
function Fix16Data(numb, nc)
{
  ttmp = "00000000"+numb.toString(16);
  tk = ttmp.length;
  ttmp = ttmp.substring(tk-nc, tk);
  return ttmp;
}

