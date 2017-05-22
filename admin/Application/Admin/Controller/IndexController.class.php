<?php
namespace Admin\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index_data(){
    	$gbgoods = M('Gbgoods');
        $result = $gbgoods -> select();
        $this->ajaxReturn($result,'JSON');
    }
     public function data_details(){
            $id  = I('id');
            $gbgoods = M('Gbgoods');
            $result = $gbgoods->where("gbgoods_id={$id}")-> select();
            $this->ajaxReturn($result,'JSON');
        }

}