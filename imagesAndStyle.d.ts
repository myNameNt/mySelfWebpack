declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.bmp";
declare module "*.tiff";
// 声明文件  用于在 使用 import引入图片时 ts 报错
declare module '*.scss' { 
  const content: any; 
  export default content; 
}
// 声明文件  用于在 使用 import引入css样式时 ts 报错