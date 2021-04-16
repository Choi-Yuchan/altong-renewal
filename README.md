
altong_next
===========


도커 react 명령어
-----------------

# *사전작업 : react component 접속 후 실제 코드가 있는 곳으로 이동합니다.*
```
cd code/git/react_test01;
```
*필요한 라이브러리를 도커 내부에 설치합니다. (단, 설치가 완료 되었는지 엔터를 눌러주셔야합니다, 버그가 일어날 수 있습니다. 설치 시간 3분)*
```
npm i -g create-react-app; npm i -g axios;
npm i -g styled-components; npm i -g serve; npm i -g http-proxy-middleware;
```

*빌드 작업입니다.*
```
npm run build;
```
*빌드된 배포파일을 3000번 포트로 npm 서버를 배포하는 작업입니다.*
```
serve -l 3000 -s build;
```


**처음 사용할때 초기화 작업**
```
cd code/git/react_test01;npm i -g create-react-app; npm i -g axios; npm i -g styled-components; npm i -g serve; npm i -g http-proxy-middleware;npm run build;serve -l 3000 -s build;
```

**이후 반복 배포 작업**
```
npm run build;serve -l 3000 -s build;
```


Library 추가 (2021-04-16)
'''
npm i react-confirm

'''
