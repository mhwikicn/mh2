
urlSuffix = new String("");
html = new String("");

function ShowLinks(level, kind)
{
  if (level == 1)  urlSuffix = "../";
  if (level == 2)  urlSuffix = "../../";

//タイトルロゴ

//  html = "<A href=\"http://mmpotato.hp.infoseek.co.jp/codes/MH2/index.html\">";
  html = "<A href=\"" + urlSuffix + "index.html\" target=\"_top\">";
  html += "<IMG src=\"" + urlSuffix + "images/TITLE.gif\" width=\"260\" height=\"64\" border=\"0\">";
  html += "</A>";
  logo.innerHTML = html;

//リンク一覧
  html = "";

  str1 = "";
  str2 = "";
  if (kind != 1) {
    str1 = "<A href=\"" + urlSuffix + "monslist/index.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += str1 + "怪物数据" + str2;

  str1 = "";
  str2 = "";
  if (kind != 14) {
    str1 = "<A href=\"" + urlSuffix + "monslist/monslevel.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += "　　" + str1 + "怪物等级" + str2;

  str1 = "";
  str2 = "";
//  if (kind != 2) {
    str1 = "<A href=\"" + urlSuffix + "stpickmap/index.html\" target=\"_top\">";
    str2 = "</A>";
//  }
  html += "　　" + str1 + "采取・发掘地图" + str2;

  str1 = "";
  str2 = "";
  if (kind != 3) {
    str1 = "<A href=\"" + urlSuffix + "evquest/index.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += "<BR>" + str1 + "活动任务" + str2;

  str1 = "";
  str2 = "";
  if (kind != 4) {
    str1 = "<A href=\"" + urlSuffix + "onquest/index.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += "　　" + str1 + "在线任务" + str2;

  str1 = "";
  str2 = "";
  if (kind != 5) {
    str1 = "<A href=\"" + urlSuffix + "offquest/index.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += "　　" + str1 + "离线任务" + str2;

  str1 = "";
  str2 = "";
  if (kind != 6) {
    str1 = "<A href=\"" + urlSuffix + "bugu/sword.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += "<BR>" + str1 + "武器一览" + str2;

  str1 = "";
  str2 = "";
  if (kind != 16) {
    str1 = "<A href=\"" + urlSuffix + "weapons/weapon01.htm\" target=\"_top\">";
    str2 = "</A>";
  }
  html += " | " + str1 + "武器派生" + str2;

  str1 = "";
  str2 = "";
  if (kind != 7) {
    str1 = "<A href=\"" + urlSuffix + "bugu/head.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += "　" + str1 + "防具一览" + str2;

  str1 = "";
  str2 = "";
  if (kind != 11) {
    str1 = "<A href=\"" + urlSuffix + "bugu/soushoku.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += "　" + str1 + "装饰品一览" + str2;

  str1 = "";
  str2 = "";
  if (kind != 8) {
    str1 = "<A href=\"" + urlSuffix + "items/index.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += "　" + str1 + "物品一览" + str2;

  str1 = "";
  str2 = "";
  if (kind != 9) {
    str1 = "<A href=\"" + urlSuffix + "skill/index.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += "　" + str1 + "技能一览" + str2;

  str1 = "";
  str2 = "";
  if (kind != 17) {
    str1 = "<A href=\"" + urlSuffix + "skill/skill.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += " | " + str1 + "技能效果" + str2;

  str1 = "";
  str2 = "";
  if (kind != 10) {
    str1 = "<A href=\"" + urlSuffix + "mixlist.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += "<BR>" + str1 + "调合列表" + str2;

  str1 = "";
  str2 = "";
  if (kind != 12) {
    str1 = "<A href=\"" + urlSuffix + "jisanlist.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += "　　" + str1 + "山菜爷交换列表" + str2;

  str1 = "";
  str2 = "";
  if (kind != 13) {
    str1 = "<A href=\"" + urlSuffix + "shokuji/ondan.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += "　　" + str1 + "料理效果一览" + str2;

  str1 = "";
  str2 = "";
  if (kind != 15) {
    str1 = "<A href=\"" + urlSuffix + "villagepeople.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += "　　" + str1 + "村民的交流" + str2;



  str1 = "<A href=\"" + urlSuffix + "index.html\" target=\"_top\">";
  str2 = "</A>";
  html += "　　" + str1 + "回到首页" + str2;

  links.innerHTML = html;

}
