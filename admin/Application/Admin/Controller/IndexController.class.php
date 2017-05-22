<?php
namespace Admin\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index_data(){
    	$gbgoods = M('Gbgoods');
        $result = $gbgoods -> select();
        $this->ajaxReturn($result,'JSON');
    }
}