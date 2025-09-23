import { createContext } from "react";
/*
    ThemeContext : 앱 전체 테마 상태를 관리하는 Context 
    light / dark 모드 전환 

    React Context 
    1단계 : createContext() , 방송 채널 개설 
    2단계 : Provider 제공   방송국 구축해, 방송 전송 
    3단계 : 자식 children 컴포넌트 consumer 가 useContext 를 통해 정보를 공유받음 , 방송 시청  
*/
export const ThemeContext = createContext();