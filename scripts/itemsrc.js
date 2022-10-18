//************************************************************
//************************************************************
//************************************************************
//************************************************************
mapHtml = new Array(10);
mapHtml[0] = "mitsu";
mapHtml[1] = "saba";
mapHtml[2] = "numa";
mapHtml[3] = "yuki";
mapHtml[4] = "kaza";
mapHtml[5] = "mori";
mapHtml[6] = "tou1";
mapHtml[7] = "tou2";
mapHtml[8] = "sent";
mapHtml[9] = "tori";

mapName = new Array(10);
mapName[0] = "密林";
mapName[1] = "砂漠";
mapName[2] = "沼地";
mapName[3] = "雪山";
mapName[4] = "火山";
mapName[5] = "森丘";
mapName[6] = "塔（１）";
mapName[7] = "塔（２）";
mapName[8] = "戦闘街";
mapName[9] = "砦";

monsName = new Array(74);
monsName[1] = "リオレイア";
monsName[2] = "ミラボレアス";
monsName[3] = "ケルビ";
monsName[4] = "モス";
monsName[5] = "ブルファンゴ";
monsName[6] = "イャンクック";
monsName[7] = "ラオシャンロン";
monsName[8] = "ドスガレオス";
monsName[9] = "アイルー";
monsName[10] = "ジジィ";
monsName[11] = "リオレウス";
monsName[12] = "アプトノス";
monsName[13] = "ゲネポス";
monsName[14] = "ディアブロス";
monsName[15] = "フルフル";
monsName[16] = "ランポス";
monsName[17] = "グラビモス";
monsName[18] = "ニグルマ";
monsName[19] = "ランゴスタ";
monsName[20] = "ゲリョス";
monsName[21] = "ガノトトス";
monsName[22] = "バサルモス";
monsName[23] = "メラルー";
monsName[24] = "カンタロス";
monsName[25] = "アプケロス";
monsName[26] = "モノブロス";
monsName[27] = "ドスランポス";
monsName[28] = "ドスゲネポス";
monsName[29] = "イワ";
monsName[30] = "イーオス";
monsName[31] = "ドスイーオス";
monsName[32] = "コモス";
monsName[33] = "キリン";
monsName[34] = "ガレオス";
monsName[35] = "ランポス";
monsName[36] = "ミラボレアス";
monsName[37] = "リオレイア【亜種】";
monsName[38] = "イャンクック【亜種】";
monsName[39] = "ゲリョス【亜種】";
monsName[40] = "イャンガルルガ";
monsName[41] = "リオレウス【希少種】";
monsName[42] = "リオレイア【希少種】";
monsName[43] = "ディアブロス【亜種】";
monsName[44] = "モノブロス【亜種】";
monsName[45] = "フルフル【亜種】";
monsName[46] = "ガノトトス【亜種】";
monsName[47] = "グラビモス【亜種】";
monsName[48] = "ダイミョウザザミ";
monsName[49] = "リオレウス【亜種】";
monsName[50] = "ラオシャンロン";
monsName[51] = "ドドブランゴ";
monsName[52] = "ババコンガ";
monsName[53] = "ラージャン";
monsName[54] = "クシャルダオラ";
monsName[55] = "シェンガオレン";
monsName[56] = "大雷光虫";
monsName[57] = "チャチャブー";
monsName[58] = "ヤマツカミ";
monsName[59] = "オオナズチ";
monsName[60] = "クシャルダオラ";
monsName[61] = "ブランゴ";
monsName[62] = "コンガ";
monsName[63] = "ガブラス";
monsName[64] = "ナナ・テスカトリ";
monsName[65] = "テオ・テスカトル";
monsName[66] = "ヤオザミ";
monsName[67] = "ショウグンギザミ";
monsName[68] = "ドスファンゴ";
monsName[69] = "ガウシカ";
monsName[70] = "ポポ";
monsName[71] = "ミラボレアス";
monsName[72] = "ヤマツカミ";
monsName[73] = "ガミザミ";

hoshuName = new Array(6);
hoshuName[0] = "<B>確定報酬</B>";
hoshuName[1] = "基本報酬";
hoshuName[2] = "捕獲追加報酬";
hoshuName[3] = "捕獲追加報酬";
hoshuName[4] = "サブA達成報酬";
hoshuName[5] = "サブB達成報酬";

shopName = new Array(16);
shopName[0] = "ジャンボ村の雑貨屋";
shopName[1] = "ジャンボ村の調合屋";
shopName[2] = "ジャンボ村に来る行商ばあさん(1)";
shopName[3] = "ジャンボ村に来る行商ばあさん(2)";
shopName[4] = "ジャンボ村の工房";
shopName[5] = "ジャンボ村の食材屋";
shopName[6] = "ジャンボ村の道具屋";
shopName[7] = "ココット村の行商の青年";
shopName[8] = "ココット村の雑貨屋";
shopName[9] = "街門の気ままな雑貨商";
shopName[10] = "街の雑貨屋";
shopName[11] = "街の食材屋";
shopName[12] = "街の調合屋";
shopName[13] = "街の道具屋";
shopName[14] = "街のアリーナの雑貨屋";
shopName[15] = "街の大老殿の雑貨屋";

//******************************************************
bukiName = new Array(11);
bukiName[0] = "大剣";
bukiName[1] = "ヘビィボウガン";
bukiName[2] = "ハンマー";
bukiName[3] = "ランス";
bukiName[4] = "片手剣";
bukiName[5] = "ライトボウガン";
bukiName[6] = "双剣";
bukiName[7] = "太刀";
bukiName[8] = "狩猟笛";
bukiName[9] = "ガンランス";
bukiName[10] = "弓";
bukiHtml = new Array(11);
bukiHtml[0] = "sword.html";
bukiHtml[1] = "heavy.html";
bukiHtml[2] = "hammer.html";
bukiHtml[3] = "lance.html";
bukiHtml[4] = "blade.html";
bukiHtml[5] = "light.html";
bukiHtml[6] = "twin.html";
bukiHtml[7] = "tachi.html";
bukiHtml[8] = "shuryou.html";
bukiHtml[9] = "gunlance.html";
bukiHtml[10] = "yumi.html";

//      防具の場合,防具の種類 2:頭  3:胴  4:腕  5:腰  0:脚
boguName = new Array(6);
boguName[0] = "脚装備";
boguName[2] = "頭装備";
boguName[3] = "胴装備";
boguName[4] = "腕装備";
boguName[5] = "腰装備";
boguHtml = new Array(6);
boguHtml[0] = "foot.html";
boguHtml[2] = "head.html";
boguHtml[3] = "armor.html";
boguHtml[4] = "arm.html";
boguHtml[5] = "waist.html";

//****************************************************************
function ShowItemDetail()
{
  icode = document.location.search.substring(1);

//アイテムコード
  if (icode == "")  return;
  no = Number("0x"+icode);
  if (no < 0x0001  ||  no > 0x0398)  return;
  html = "";
  if (no == 0x0001) {
    html += "&lt;";
  } else {
    html += "<A href=\"items.html?" + SubHexNumber(no) + "\">&lt;</A>";
  }
  html += icode.toUpperCase();
  if (no == 0x0398) {
    html += "&gt;";
  } else {
    html += "<A href=\"items.html?" + AddHexNumber(no) + "\">&gt;</A>";
  }
  hitemcode.innerHTML = html;

//アイテム名
  hitemname.innerHTML = itemname[no];

//個数,レア,買値,売値
  data = itemspec[no];
  if (data.substring(0,3) == 255) {
    hitemkosu.innerHTML = "∞";
  } else {
    hitemkosu.innerHTML = Number(data.substring(0,3));
  }
  hitemrare.innerHTML = data.substring(3,4);
  if (Number(data.substring(4,9)) >= 0) {
    hitemkaiz.innerHTML = Number(data.substring(4,9)) + "ｚ";
  }
  hitemuriz.innerHTML = Number(data.substring(9,14)) + "ｚ";

//説明文
  hitemdesc.innerHTML = itemdesc[no];


  if (no > 0x031d)  return;

//****************************************************************
//採取

  hitemsaishu0.innerHTML = FormatSaishu(itemsaishu0[no], 0);
  hitemsaishu1.innerHTML = FormatSaishu(itemsaishu1[no], 0);
  hitemsaishu2.innerHTML = FormatSaishu(itemsaishu2[no], 0);
  hitemsaishu3.innerHTML = FormatSaishu(itemsaishu3[no], 1);
  hitemsaishu4.innerHTML = FormatSaishu(itemsaishu4[no], 1);
  hitemsaishu5.innerHTML = FormatSaishu(itemsaishu5[no], 1);


//****************************************************************
//剥ぎ取り

  hitemhagi0.innerHTML = FormatHagi(itemhagi0[no]);
  hitemhagi1.innerHTML = FormatHagi(itemhagi1[no]);


//****************************************************************
//報酬
  hitemhoshu0.innerHTML = FormatHoushu(itemhoshu0[no]);
  hitemhoshu1.innerHTML = FormatHoushu(itemhoshu1[no]);


//****************************************************************
//調合・その他
//  0-0:  識別子  M:２種調合  X:３種調合
//                J:爺さん    K:マカ壷
//                S:ただの文字列 1-3:文字列の長さ 4-:文字列
//                G:(ドス)大食いマグロ食べた結果出現するか
  data = itemchogo[no];
  html = "";
  ic = 0;
  while (ic < data.length) {
    if (ic > 0)  html += "<BR>";
    yflag = data.substring(ic,ic+1);

    if (yflag == "M") {
      html += FormatItemName(data.substring(ic+1,ic+4)) + " と ";
      html += FormatItemName(data.substring(ic+4,ic+7)) + " を２種調合";
      html += " （成功率" + Number(data.substring(ic+7,ic+10)) + "％）";
      if (data.substring(ic+10,ic+11) == 1)  html += "　【錬金】";
      ic = ic + 11;

    } else if (yflag == "X") {
      html += FormatItemName(data.substring(ic+1,ic+4)) + " と ";
      html += FormatItemName(data.substring(ic+4,ic+7)) + " と ";
      html += FormatItemName(data.substring(ic+7,ic+10)) + " を３種調合";
      html += " （成功率" + Number(data.substring(ic+10,ic+13)) + "％）";
      if (data.substring(ic+13,ic+14) == 1)  html += "　【錬金】";
      ic = ic + 14;

    } else if (yflag == "J") {
      kind = data.substring(ic+1,ic+2);			//爺さんの場所
      if (kind == 9) {
        html += "どこの爺さんでも ";
        html += FormatItemName(data.substring(ic+2,ic+5));
        numb = data.substring(ic+5,ic+7);
        if (numb > 1)  html += "×" + numb;
        html += " を渡すと貰える";
      } else {
        html += mapName[kind] + "の爺さんに ";
        html += FormatItemName(data.substring(ic+2,ic+5));
        html += " を渡すと貰えることがある";
      }
      ic = ic + 7;

    } else if (yflag == "K") {
      html += FormatItemName(data.substring(ic+1,ic+4));
      html += " を";
      html += "<A href=\"../makalist.html#" + FixData(data.substring(ic+4,ic+6), 4) + "\">";
      html += "一定時間埋めておく</A>と入手";
      ic = ic + 6;

    } else if (yflag == "S") {
      numb = Number(data.substring(ic+1,ic+4));		//文字列の長さ
      html += data.substring(ic+4, ic+4+numb);
      ic = ic + 4 + numb;

    } else if (yflag == "G") {
      html += FormatItemName(data.substring(ic+1,ic+4));
      html += " を食べて体力が回復しなかった場合、";
      html += Number(data.substring(ic+4,ic+7)) + "％の確率で入手";
      ic = ic + 7;

    } else {
      alert("Illegal identification code");
      break;
    }
  }
  hitemchogo.innerHTML = html;


//****************************************************************
//購入
//  0-1:  購入場所番号
//
  data = itemkonyu[no];
  html = "";
  for (ic=0; ic<data.length; ic+=2) {
    shopNo = Number(data.substring(ic,ic+2));
    if (ic > 0)  html += "<BR>";
    html += shopName[shopNo] + " から購入";
  }
  hitemkonyu.innerHTML = html;


//****************************************************************
//武具への用途
//  0-0:フラグ   W:武器  B:防具  S:装飾品
//  1-1:武器の場合,武器の種類 0:大剣 2:ハンマー 3:ランス 4:片手件 6:双剣 7:太刀 8:狩猟笛 9:ガンランス
//                            1:ヘヴィボウガン 5:ライトボウガン A:弓
//      防具の場合,防具の種類 2:頭  3:胴  4:腕  5:腰  0:脚
//      装飾品の場合未使用
//  2-4:武器/防具/装飾品No.
//  5-5:用途フラグ  0:生産  1:強化  2-7:レベルアップ
//  6-7:必要個数
//以後は強化の場合のみで強化元データ
//  8-8:武器の種類/防具の種類
//  9-11:武器/防具No.
//****************************************************************
  data = itemyoto0[no];
  html = "";
  ic = 0;
  while (ic < data.length) {
    yflag = data.substring(ic+5,ic+6);		//用途フラグ
//武器の場合
    if (data.substring(ic,ic+1) == "W") {
      if (yflag == 1) {
        html += FormatBukiName(data.substring(ic+8,ic+12));
        html += " から ";
      }
      html += FormatBukiName(data.substring(ic+1,ic+5));
      if (yflag == 0) {
        html += " の生産に必要";
      } else if (yflag == 1) {
        html += " への強化に必要";
      }
      html += "　（" + Number(data.substring(ic+6,ic+8)) + "個）<BR>";

//防具の場合
    } else if (data.substring(ic,ic+1) == "B") {
      kind = Number(data.substring(ic+1,ic+2));
      html += boguName[kind] + " ";
      if (yflag == 1) {
        html += FormatBoguName(data.substring(ic+8,ic+12));
        html += " から ";
      }
      html += FormatBoguName(data.substring(ic+1,ic+5));
      if (yflag == 0) {
        html += " の生産に必要";
      } else if (yflag == 1) {
        html += " への強化に必要";
      } else if (yflag >= 2) {
        html += " レベル" + yflag + " へのレベルアップに必要";
      }
      html += "　（" + Number(data.substring(ic+6,ic+8)) + "個）<BR>";

//装飾品の場合
    } else if (data.substring(ic,ic+1) == "S") {
      html += FormatSoshName(data.substring(ic+1,ic+5));
      html += " の生産に必要";
      html += "　（" + Number(data.substring(ic+6,ic+8)) + "個）<BR>";
    }
//次のデータ
    if (yflag == 1) {
      ic = ic + 12;
    } else {
      ic = ic + 8;
    }
  }
  hitemyoto0.innerHTML = html;

//****************************************************************
//その他の用途
//  0-0:  識別子  M:２種調合  X:３種調合
//                J:爺さん
//                S:ただの文字列 1-3:文字列の長さ 4-:文字列
//                G:(ドス)大食いマグロ食べた結果出現するアイテム

  data = itemyoto1[no];
  html = "";
  ic = 0;
  while (ic < data.length) {
    if (ic > 0)  html += "<BR>";
    yflag = data.substring(ic,ic+1);		//識別子
    if (yflag == "J") {
      kind = data.substring(ic+1,ic+2);			//爺さんの場所
      if (kind == 9) {
        html += "どこの爺さんでも、";
        numb = Number(data.substring(ic+2,ic+4));
        if (numb > 1)  html += numb + "個";
        html += "渡すと ";
        html += FormatItemName(data.substring(ic+4,ic+7));
        html += " が貰える";
      } else {
        html += mapName[kind] + "の爺さんに渡すと ";
        html += FormatItemName(data.substring(ic+4,ic+7));
        numb = data.substring(ic+7,ic+10);
        if (numb > 0)  html += " か " + FormatItemName(numb);
        numb = data.substring(ic+10,ic+13);
        if (numb > 0)  html += " か " + FormatItemName(numb);
        numb = data.substring(ic+13,ic+16);
        if (numb > 0)  html += " か " + FormatItemName(numb);
        html += " が貰える";
      }
      ic = ic + 16;

    } else if (yflag == "M") {				//2種調合に使える
      html += FormatItemName(data.substring(ic+8,ic+11));
      html += " と２種調合すれば ";
      html += FormatItemName(data.substring(ic+1,ic+4));
      html += " が作れる （成功率";
      html += Number(data.substring(ic+4,ic+7)) + "％）";
      if (data.substring(ic+7,ic+8) == 1)  html += "　【錬金】";
      ic = ic + 11;

    } else if (yflag == "X") {				//3種調合に使える
      html += FormatItemName(data.substring(ic+8,ic+11));
      html += " と ";
      html += FormatItemName(data.substring(ic+11,ic+14));
      html += " とで３種調合すれば ";
      html += FormatItemName(data.substring(ic+1,ic+4));
      html += " が作れる （成功率";
      html += Number(data.substring(ic+4,ic+7)) + "％）";
      if (data.substring(ic+7,ic+8) == 1)  html += "　【錬金】";
      ic = ic + 14;

    } else if (yflag == "K") {				//塊系が何になるか
      html += "武具屋で生産すると、";
      html += Number(data.substring(ic+5,ic+7)) + "％の確率で ";
      html += FormatBukiName(data.substring(ic+1,ic+5));
      html += " になる";
      ic = ic + 7;

    } else if (yflag == "G") {				//(ドス)大食いマグロ食べた結果出現するアイテム
      html += "食べて体力が回復しなかった場合、";
      html += Number(data.substring(ic+1,ic+4)) + "％の確率で ";
      html += FormatItemName(data.substring(ic+4,ic+7));
      html += " が出現";
      ic = ic + 7;

    } else if (yflag == "S") {
      numb = Number(data.substring(ic+1,ic+4));		//文字列の長さ
      html += data.substring(ic+4, ic+4+numb);
      ic = ic + 4 + numb;
    }
  }
  hitemyoto1.innerHTML = html;
}

//---------------------------------
function FormatItemName(tdata)
{
  thtml = "";
  tbno = Number(tdata);
  if (tbno == 0) {
    thtml += "何かアイテム";
  } else {
    thtml += "<A href=\"items.html?" + Fix16Data(tbno,4).toLowerCase() + "\" target=\"_blank\">";
    thtml += itemname[tbno] + "</A>";
  }
  return thtml;
}

//---------------------------------
function FormatBukiName(tdata)
{
  thtml = "";
  tkind = Number("0x"+tdata.substring(0,1));
  thtml += bukiName[tkind] + " ";
  tbno = Number(tdata.substring(1,4));
  thtml += "<A href=\"../bugu/" + bukiHtml[tkind] + "#" + FixData(tbno, 4) + "\">";
  if (tkind == 1  || tkind == 5  ||  tkind == 10) {
    thtml += gunname[tbno] + "</A>";
  } else {
    thtml += kenname[tbno] + "</A>";
  }
  return thtml;
}

//---------------------------------
function FormatBoguName(tdata)
{
  thtml = "";
  tkind = Number("0x"+tdata.substring(0,1));
  tbno = Number(tdata.substring(1,4));
  thtml += "<A href=\"../bugu/";
  thtml += boguHtml[tkind];
  thtml += "#" + FixData(tbno, 4) + "\">";
  if (tkind == 0) {
    thtml += footname[tbno];
  } else if (tkind == 2) {
    thtml += headname[tbno];
  } else if (tkind == 3) {
    thtml += armorname[tbno];
  } else if (tkind == 4) {
    thtml += armname[tbno];
  } else if (tkind == 5) {
    thtml += waistname[tbno];
  }
  thtml += "</A>";
  return thtml;
}

//---------------------------------
function FormatSoshName(tdata)
{
  thtml = "";
  thtml += "装飾品 ";
  tbno = Number(tdata.substring(1,4));
  thtml += "<A href=\"../bugu/soushoku.html#" + FixData(tbno, 4) + "\">";
  thtml += soshname[tbno] + "</A>";
  return thtml;
}



//****************************************************************
//  採取発掘用のhtml構文生成
//  0-1:  マップ番号
//  2-3:  エリア番号 (00:BC  15:隠し)
//  4-5:  ポイント番号
//  6-8:  昼の確率
//  9-11: 夜の確率
//****************************************************************
function FormatSaishu(tdata, tcla)
{
  thtml = "";
  for (ic=0; ic<tdata.length; ic+=12) {
    mapNo = Number(tdata.substring(ic,ic+2));
    areaNo = Number(tdata.substring(ic+2,ic+4));
    ptsNo = Number(tdata.substring(ic+4,ic+6));
    prob1 = Number(tdata.substring(ic+6,ic+9));
    prob2 = Number(tdata.substring(ic+9,ic+12));

    if (ic > 0)  thtml += "<BR>";
    thtml += "<A href=\"../stpickmap/";
    thtml += mapHtml[mapNo];
    if (tcla == 1) {
      thtml += "h";
    }
    thtml += ".html#" + FixData(areaNo, 2) + "d\">";
    thtml += mapName[mapNo];
    if (areaNo == 0) {
      thtml += "　キャンプ地-" + ptsNo;
    } else if (areaNo == 15) {
      thtml += "　隠しエリア-" + ptsNo;
    } else {
      thtml += "　エリア " + areaNo + "-" + ptsNo;
    }
    thtml += "</A>";

    if (prob1 > 0)  thtml += "　　昼 " + prob1 + "％";
    if (prob2 > 0)  thtml += "　　夜 " + prob2 + "％";
  }
  return thtml;
}

//****************************************************************
//  剥ぎ取り用のhtml構文生成
//  0-1:  モンスターコード
//  2-2:  種類(0:本体 1:尻尾 2:落し物 3:背中 4:(キング) 5:落し物 1 6:落し物 2 7:落し物 3)
//  3-5:  確率
//****************************************************************
function FormatHagi(tdata)
{
  thtml = "";
  for (ic=0; ic<tdata.length; ic+=6) {
    monsNo = Number(tdata.substring(ic,ic+2));
    kind = Number(tdata.substring(ic+2,ic+3));
    prob = Number(tdata.substring(ic+3,ic+6));

    if (ic > 0)  thtml += "<BR>";
    thtml += "<A href=\"../monslist/mons" + Fix16Data(monsNo, 2) + ".html\">";
    thtml += monsName[monsNo] + "</A>";

    if (kind == 0) {
      thtml += " から剥ぎ取り";
    } else if (kind == 1) {
      thtml += " の尻尾から剥ぎ取り";
    } else if (kind == 2) {
      thtml += " の落し物を採取";
    } else if (kind == 3) {
      thtml += " の背中から剥ぎ取り";
    } else if (kind == 4) {
      thtml += "（キング） から剥ぎ取り";
    } else if (kind == 5) {
      thtml += " の落し物１を採取";
    } else if (kind == 6) {
      thtml += " の落し物２を採取";
    } else if (kind == 7) {
      thtml += " の落し物３を採取";
    }
    thtml += "　（" + prob + "％）";
  }
  return thtml;
}

//****************************************************************
//  クエスト報酬用のhtml構文生成
//  0-2:クエ一連番号
//  3-5:確率
//  6-8:報酬名文字列長さ
//  9- :報酬名
//****************************************************************
function FormatHoushu(tdata)
{
  thtml = "";
  ic = 0;
  while (ic < tdata.length) {
    if (ic > 0)  thtml += "<BR>";
    tqno = Number(tdata.substring(ic,ic+3));
    prob = Number(tdata.substring(ic+3,ic+6));
    seas = Number(tdata.substring(ic+6,ic+7));		//季節
    numb = Number(tdata.substring(ic+7,ic+10));		//文字長さ

    if (tqno < 500) {					//通常のクエスト
      tqnm = quename[tqno];
      if (tqnm.charAt(0) == 0) {
        thtml += "オフ☆";
      } else {
        thtml += "オン★";
      }
      thtml += tqnm.charAt(1) + " ";

      thtml += "<IMG src=\"../images/season" + seas + "a.gif\" border=\"0\">" + " ";

      thtml += "<A href=\"../";
      if (tqnm.charAt(0) == 0) {
        thtml += "off";
      } else {
        thtml += "on";
      }
      thtml += "quest/rem" + tqnm.charAt(1) + ".html#" + tqnm.substring(2,6) + "\">";
      thtml += tqnm.substring(6) + "</A>" + " の ";
      if (numb >= 900) {
        thtml += hoshuName[numb-900];
        numb = 0;
      } else {
        thtml += tdata.substring(ic+10,ic+10+numb);
      }
      thtml += "　（" + prob + "％）";

    } else {
      tqnm = vquename[tqno-500];
      thtml += "イベントクエスト ";
      thtml += "<A href=\"../evquest/evrem" + FixData(tqno-500,2) + ".html\">";
      thtml += tqnm + "</A>" + " の ";
      if (numb >= 900) {
        thtml += hoshuName[numb-900];
        numb = 0;
      } else {
        thtml += tdata.substring(ic+10,ic+10+numb);
      }
      thtml += "　（" + prob + "％）";
    }
    ic = ic + 10 + numb;
  }
  return thtml;
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




function AddHexNumber(numb)
{
  ttmp = "0000"+(numb+1).toString(16);
  tk = ttmp.length;
  return ttmp.substring(tk-4,tk);
}

function SubHexNumber(numb)
{
  ttmp = "0000"+(numb-1).toString(16);
  tk = ttmp.length;
  return ttmp.substring(tk-4,tk);
}

