<?php
namespace app\api\model;
use think\Model;
class Gbgoods extends Model
{
	// 开启自动写入时间戳
	protected $autoWriteTimestamp = true;
	// 定义自动完成的属性
	protected $insert = ['gbgoods_state' => 1];
	// 定义关联方法
	// 定义关联
	public function skus()
	{
	return $this->hasMany('Sku');
	}
}