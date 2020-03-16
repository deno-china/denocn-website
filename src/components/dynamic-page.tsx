import React, { useEffect, useState } from "react";

// 使用此方法动态加载组件，避免在服务端渲染中执行
export default function dynamicLoad(loader: () => Promise<any>) {
  let Page: any;
  return function DynamicPage(props: any) {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      loader().then(page => {
        Page = page.default ?? page;
        setLoaded(true);
      });
    }, []);

    return loaded ? <Page {...props} /> : <></>;
  };
}
