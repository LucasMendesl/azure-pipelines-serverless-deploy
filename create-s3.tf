variable "access_key" {
}

variable "secret_key" {
}

variable "env" {
  default = "dev"
}

provider "aws" { 
  access_key              = "${var.access_key}"
  secret_key              = "${var.secret_key}"
  region                  = "us-east-1"  
}

resource "aws_s3_bucket" "deploy_lambda_bucket" {
  bucket = "bkt-deploy-lambda-${var.env}"
  acl    = "private"
}