(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{348:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[s._v("#")]),s._v(" Installation")]),s._v(" "),t("h2",{attrs:{id:"docker-ubuntu-이미지를-받아서-설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-ubuntu-이미지를-받아서-설치"}},[s._v("#")]),s._v(" Docker Ubuntu 이미지를 받아서 설치")]),s._v(" "),t("p",[t("RouterLink",{attrs:{to:"/book/03.-back-end/06.-devops/docker/cli.html"}},[s._v("Docker")]),s._v(" 관련 내용과 중복될 수 있습니다.")],1),s._v(" "),t("ul",[t("li",[s._v("설치 환경\n"),t("ul",[t("li",[s._v("Ubuntu 18.0.4 LTS")])])])]),s._v(" "),t("h3",{attrs:{id:"설치-준비"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#설치-준비"}},[s._v("#")]),s._v(" 설치 준비")]),s._v(" "),t("h4",{attrs:{id:"ubuntu-이미지-받기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-이미지-받기"}},[s._v("#")]),s._v(" ubuntu 이미지 받기")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker pull ubuntu:latest\n")])])]),t("h4",{attrs:{id:"container-생성하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#container-생성하기"}},[s._v("#")]),s._v(" Container 생성하기")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker run -i -t -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),s._v(":9000/tcp --name square-dev ubuntu /bin/bash\n")])])]),t("h4",{attrs:{id:"apt-get-업데이트"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apt-get-업데이트"}},[s._v("#")]),s._v(" "),t("code",[s._v("apt-get")]),s._v(" 업데이트")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n")])])]),t("h4",{attrs:{id:"vim-설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vim-설치"}},[s._v("#")]),s._v(" "),t("code",[s._v("vim")]),s._v(" 설치")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v("\n")])])]),t("h3",{attrs:{id:"package-를-이용한-nginx-설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-를-이용한-nginx-설치"}},[s._v("#")]),s._v(" Package 를 이용한 nginx 설치")]),s._v(" "),t("h4",{attrs:{id:"nginx-다운로드-및-설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-다운로드-및-설치"}},[s._v("#")]),s._v(" "),t("code",[s._v("nginx")]),s._v(" 다운로드 및 설치")]),s._v(" "),t("p",[s._v("설치 여부를 묻는게 귀찮으니 "),t("code",[s._v("-y")]),s._v(" 옵션을 준다.")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx -y\n")])])]),t("h4",{attrs:{id:"설치-확인"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#설치-확인"}},[s._v("#")]),s._v(" 설치 확인")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ nginx -v\n\nnginx version: nginx/1.14.0 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Ubuntu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                                  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# version")]),s._v("\n\n$ nginx -t\n\nnginx: the configuration "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" /etc/nginx/nginx.conf syntax is ok      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# config file 내용 (문법) 검사")]),s._v("\nnginx: configuration "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" /etc/nginx/nginx.conf "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" is successful    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# config file 테스트 결과")]),s._v("\n")])])]),t("h4",{attrs:{id:"nginx-상태"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-상태"}},[s._v("#")]),s._v(" nginx 상태")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx status\n")])])]),t("h4",{attrs:{id:"nginx-중지"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-중지"}},[s._v("#")]),s._v(" nginx 중지")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx stop\n")])])]),t("h4",{attrs:{id:"nginx-기동"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-기동"}},[s._v("#")]),s._v(" nginx 기동")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx start\n")])])]),t("h2",{attrs:{id:"service-start"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-start"}},[s._v("#")]),s._v(" Service Start")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx start\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start nginx\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /etc/init.d/nginx start\n")])])]),t("h2",{attrs:{id:"service-restart"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-restart"}},[s._v("#")]),s._v(" Service Restart")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx restart\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart nginx\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /etc/init.d/nginx restart\n")])])]),t("h2",{attrs:{id:"service-stop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-stop"}},[s._v("#")]),s._v(" Service Stop")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx stop\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl stop nginx\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /etc/init.d/nginx stop\n")])])]),t("h2",{attrs:{id:"service-status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-status"}},[s._v("#")]),s._v(" Service Status")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx status\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl status nginx\n")])])]),t("h2",{attrs:{id:"service-status-reload"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-status-reload"}},[s._v("#")]),s._v(" Service Status Reload")]),s._v(" "),t("ul",[t("li",[s._v("설정파일을 변경한 후 적용시 사용")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx reload\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl reload nginx\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" nginx -s reload\n")])])]),t("h2",{attrs:{id:"configuration-check"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration-check"}},[s._v("#")]),s._v(" Configuration Check")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" nginx -t\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);