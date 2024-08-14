import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles


  global.lang = { ff: "vr", ffb: "vb" }

  return (
    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x />
      <Window title={"قیمت لحطه ای تتر"} style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)" }}>

        {/* <pre style={{ direction: "ltr" }}>{JSON.stringify(props, null, 2)}</pre> */}
        <br-xx />
        <div style={{
          width: "100%", height: 50, backgroundColor: "#71C1A2", borderRadius: 10,
          textAlign: "center",
        }}>
          <br-x />
          <br-xx />
          لحظه ای: {
            (props.p.price as number).toLocaleString("fa-ir")
          }
        </div>

        <br-x />
        

        <div style={{
          width: "100%", height: 50, backgroundColor: "#68C5E1", borderRadius: 10,
          textAlign: "center",
        }}>
          <br-x />
          <br-xx />
          تغییرات ۲۴ ساعت : {
            (Number(props.p.diff24d) as number).toLocaleString("fa-ir") + "٪"
          }
        </div>

        <br-x />
        

        <div style={{
          width: "100%", height: 50, backgroundColor: "#EDDF5F", borderRadius: 10,
          textAlign: "center",
        }}>
          <br-x />
          <br-xx />
          تغییرات هفتگی   : {
            (Number(props.p.diff7d) as number).toLocaleString("fa-ir") + "٪"
          }
        </div>

        <br-x />
        

        <div style={{
          width: "100%", height: 50, backgroundColor: "#996EDA", borderRadius: 10,
          textAlign: "center",
        }}>
          <br-x />
          <br-xx />
          تغییرات ماهانه   : {
            (Number(props.p.diff30d) as number).toLocaleString("fa-ir") + "٪"
          }
        </div>
        <br-x />
        <br-xx />
        <center style={{fontSize:13}}>
          تهیه شده توسط تیم پژوهشی
        </center>

      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

  let res = await fetch("https://api.tetherland.com/currencies")
  let data = await res.json()
  let p = data.data.currencies.USDT

  console.log("PRICEEEEEEEEEEEE", p)


  return {
    props: {
      data: global.QSON.stringify({
        p,
        session,
        // nlangs,
      })
    },
  }
}