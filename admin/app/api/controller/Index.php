<?php
namespace app\api\controller;
use think\Db;
use think\Request;

use app\api\model\Gbgoods as GbgoodsModel;
use app\api\model\Sku;

class Index
{
    public function _empty($name)
    {
        //把所有城市的操作解析到city方法
        abort(404,'页面不存在');
    }
    public function allgbdata() 
    {
    	$result = Db::query("select gbgoods_id,gbgoods_name,gbgoods_originprice,gbgoods_price,gbgoods_gbprice,gbgoods_pic,gbgoods_pnum,gbgoods_gbnum,gbgoods_num,gbgoods_details,gbgoods_picdetails from xyb_gbgoods WHERE gbgoods_state=1");
        if($result){
    		return json($result);
    	}else{
    		abort(404,'信息不存在');
    	} 
    }
    public function user()
    {
        $result = Db::query('select * from xyb_user where userId=11111111' );
        if($result){
        	return json($result);
        }else{
        	abort(404,'用户不存在');
        }		
    }
    public function gbdatadetail(Request $request){
        $gbgoods_id = $request->param('gbgoods_id');
        if(!$gbgoods_id)
            abort(404,'信息不存在');
        else{    
            $gbgood = GbgoodsModel::get($gbgoods_id);        
            $sku = $gbgood->skus()->select();
            $gbgood->skus=$sku;
            if($gbgood)
                return $gbgood->toJson();
            else
                abort(404,'信息不存在');
        }
    }
}
