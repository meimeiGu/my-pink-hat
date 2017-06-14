<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        $this->display();
    }
     public function inputfdata () 
     {
         $data['userId'] = I('userId');
         $data['gbgoods_id'] = I('gbgoods_id');  
         $data['gbsku_id'] = I('gbsku_id');   
         $data['gbsingleorder_price'] = I('gbsingleorder_price'); 
         $data['gbsingleorder_num'] = I('gbsingleorder_num'); 
         $data['gbsingleorder_time'] =date('Y-m-d H:i:s', time());
         $model = M('Gbsingleorder');
         $lastId = $model->data($data)->add();

         if($lastId){
             $this->ajaxReturn($lastId);
         }else{
              $this->ajaxReturn(0);
         } 
     }
     public function getuserdata() 
     {
         $userId = I('userId');  
         $model = M('User');
         $result = $model->where('userId=1599')->select();

         if($result){
             $this->ajaxReturn($result);
         }else{
             $this->ajaxReturn(0);
         } 
     }
     public function allgbdata() 
     {
     	$model = M('Gbgoods');
        $result = $model->where('gbgoods_state=1')->select();
        if($result){
            $this->ajaxReturn($result);
	    }else{
            $this->ajaxReturn(0);
        } 
     }
   public function groupdata()
     {
     	$sku_id = I('sku_id');  
 		$model = M('Gbgoods');
 	    $result = $model->table('xyb_gbgoods,xyb_sku')->where("xyb_gbgoods.gbgoods_id = xyb_sku.gbgoods_id AND gbsku_id={$sku_id}")->select();

 	    if($result){
 	        $this->ajaxReturn($result);
 	    }else{
 	        $this->ajaxReturn(0);
 	    }  
     }
 

    
     //详细页面 返回物品信息
     public function gbdatadetail(){

        $gbgoods_id = I('gbgoods_id');
 		$model = M('Gbgoods');
 	    $result = $model->where("gbgoods_id={$gbgoods_id}")->select();

 	    if($result){
 	        $this->ajaxReturn($result);
 	    }else{
 	        $this->ajaxReturn(0);
 	    } 
     }

     //详细页面 正在开团的数据
     public function gborderdata(){
     	$gbgoods_id = I('gbsingleorder_id');
     	 $userId = I('userId');
 		$model = M('Gbsingleorder');
 	    $result = $model->where("gbgoods_id={$gbgoods_id} AND userId={$userId}")->order('gbsingleorder_id desc')->limit(1)->select();

 	    if($result){
 	        $this->ajaxReturn($result);
 	    }else{
 	        $this->ajaxReturn(0);
 	    } 

     }

}